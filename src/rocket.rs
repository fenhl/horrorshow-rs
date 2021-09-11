use {
    rocket::{
        Request,
        http::Status,
        response::{
            self,
            Responder,
            content::Html,
        },
    },
    crate::{
        Template,
        error::Error,
    },
};

pub trait TemplateExt {
    fn write_to_html(self) -> Result<Html<String>, Error>;
}

impl<T: Template> TemplateExt for T {
    fn write_to_html(self) -> Result<Html<String>, Error> {
        let mut buf = String::default();
        self.write_to_string(&mut buf)?;
        Ok(Html(buf))
    }
}

impl<'r> Responder<'r, 'static> for Error {
    fn respond_to(self, _: &'r Request<'_>) -> response::Result<'static> {
        eprintln!("error rendering HTML: {:?}", self);
        Err(Status::InternalServerError)
    }
}
