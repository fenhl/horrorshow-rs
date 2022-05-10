use {
    dep_rocket_beta::{
        Request,
        http::Status,
        response::{
            self,
            Responder,
            content::RawHtml,
        },
    },
    crate::{
        Template,
        error::Error,
        prelude::*,
    },
};

impl<S> RenderOnce for RawHtml<S>
where
    S: AsRef<str>,
{
    fn render_once(self, tmpl: &mut TemplateBuffer<'_>) {
        tmpl.write_raw(self.0.as_ref())
    }
    fn size_hint(&self) -> usize {
        self.0.as_ref().len()
    }
}

impl<S> RenderMut for RawHtml<S>
where
    S: AsRef<str>,
{
    fn render_mut(&mut self, tmpl: &mut TemplateBuffer<'_>) {
        tmpl.write_raw(self.0.as_ref())
    }
}

impl<S> Render for RawHtml<S>
where
    S: AsRef<str>,
{
    fn render(&self, tmpl: &mut TemplateBuffer<'_>) {
        tmpl.write_raw(self.0.as_ref())
    }
}

pub type Result = std::result::Result<RawHtml<String>, Error>;

pub trait TemplateExt {
    fn write_to_html(self) -> Result;
}

impl<T: Template> TemplateExt for T {
    fn write_to_html(self) -> Result {
        let mut buf = String::default();
        self.write_to_string(&mut buf)?;
        Ok(RawHtml(buf))
    }
}

impl<'r, F> Responder<'r, 'static> for FnRenderer<F>
where Self: Render {
    fn respond_to(self, req: &'r Request<'_>) -> response::Result<'static> {
        self.write_to_html().respond_to(req)
    }
}

impl<'r> Responder<'r, 'static> for Error {
    fn respond_to(self, _: &'r Request<'_>) -> response::Result<'static> {
        eprintln!("error rendering HTML: {:?}", self);
        Err(Status::InternalServerError)
    }
}
