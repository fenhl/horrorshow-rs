var searchIndex = {};
searchIndex["horrorshow"] = {"doc":"Horrorshow","items":[[3,"Error","horrorshow","",null,null],[12,"write","","",0,null],[12,"render","","",0,null],[3,"TemplateBuffer","","A template buffer. This is the type that gets passed to closures inside templates.",null,null],[3,"FnRenderer","","A template renderer. The `html! {}` macro returns a `FnRenderer`.",null,null],[3,"Raw","","Raw content marker.",null,null],[12,"0","","",1,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"error"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"record_error","","",2,{"inputs":[{"name":"self"},{"name":"e"}],"output":null}],[11,"write_raw","","Write a raw string to the template output.",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"write_fmt","","Escape and write the formatted arguments to the template output.",2,{"inputs":[{"name":"self"},{"name":"arguments"}],"output":null}],[11,"write_str","","Escape and write a string to the template output.",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"as_writer","","Returns an escaping Write adapter.",2,{"inputs":[{"name":"self"}],"output":{"name":"templatewriter"}}],[11,"as_raw_writer","","Returns a non-escaping Write adapter.",2,{"inputs":[{"name":"self"}],"output":{"name":"rawtemplatewriter"}}],[11,"new","","",3,{"inputs":[{"name":"f"}],"output":{"name":"self"}}],[11,"with_capacity","","",3,{"inputs":[{"name":"usize"},{"name":"f"}],"output":{"name":"self"}}],[11,"render_once","","",3,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"render_mut","","",3,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",3,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"self"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"raw"}}],[11,"render_once","","",1,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"render_mut","","",1,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",1,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[0,"prelude","","Traits that should always be imported.",null,null],[3,"FnRenderer","horrorshow::prelude","A template renderer. The `html! {}` macro returns a `FnRenderer`.",null,null],[3,"Raw","","Raw content marker.",null,null],[12,"0","","",1,null],[3,"TemplateBuffer","","A template buffer. This is the type that gets passed to closures inside templates.",null,null],[8,"Render","","Something that can be rendered by reference.",null,null],[10,"render","","Render this into a template buffer.",4,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[8,"RenderBox","","Something that can be rendered once out of a box.",null,null],[8,"RenderMut","","Something that can be rendered by mutable reference.",null,null],[10,"render_mut","","Render this into a template buffer.",5,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[8,"RenderOnce","","Something that can be rendered once.",null,null],[10,"render_once","","Render this into a template buffer.",6,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","Returns a (very) rough estimate of how many bytes this Render will use.",6,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[8,"Template","","A template that can be rendered into something.",null,null],[11,"into_string","","Render this into a new String.",7,{"inputs":[{"name":"self"}],"output":{"generics":["string","error"],"name":"result"}}],[11,"write_to_string","","Render this into an existing String.",7,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_fmt","","Render this into something that implements fmt::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_io","","Render this into something that implements io::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[0,"helper","horrorshow","Helpers templates.",null,null],[0,"doctype","horrorshow::helper","Helpers for inserting `DOCTYPE`s.",null,null],[0,"HTML4","horrorshow::helper::doctype","HTML 4.01 doctypes",null,null],[17,"Strict","horrorshow::helper::doctype::HTML4","",null,null],[17,"Transitional","","",null,null],[17,"Frameset","","",null,null],[17,"HTML","horrorshow::helper::doctype","",null,null],[8,"Template","horrorshow","A template that can be rendered into something.",null,null],[11,"into_string","horrorshow::prelude","Render this into a new String.",7,{"inputs":[{"name":"self"}],"output":{"generics":["string","error"],"name":"result"}}],[11,"write_to_string","","Render this into an existing String.",7,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_fmt","","Render this into something that implements fmt::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_io","","Render this into something that implements io::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[8,"Render","horrorshow","Something that can be rendered by reference.",null,null],[10,"render","","Render this into a template buffer.",4,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[8,"RenderBox","","Something that can be rendered once out of a box.",null,null],[8,"RenderMut","","Something that can be rendered by mutable reference.",null,null],[10,"render_mut","","Render this into a template buffer.",5,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[8,"RenderOnce","","Something that can be rendered once.",null,null],[10,"render_once","","Render this into a template buffer.",6,{"inputs":[{"name":"self"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","horrorshow::prelude","Returns a (very) rough estimate of how many bytes this Render will use.",6,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[14,"html","horrorshow","Crate a new html template",null,null],[14,"box_html","","Crate a new owned html template.",null,null],[14,"template","","Create a new template.",null,null],[14,"labels","","Utility macro for generating a space-delimited string from a set of labels; some of which may be conditionally included into the final string. Labels are anything that implements the `RenderOnce` trait (e.g. `String` or `&str`).",null,null],[14,"labels_sep_by","","Utility macro for generating a delimited string from a set of labels; some of which may be conditionally included into the final string. The delimiter/seperator and labels are anything that implements the `RenderOnce` trait (e.g. `String` or `&str`).",null,null],[11,"into_string","horrorshow::prelude","Render this into a new String.",7,{"inputs":[{"name":"self"}],"output":{"generics":["string","error"],"name":"result"}}],[11,"write_to_string","","Render this into an existing String.",7,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_fmt","","Render this into something that implements fmt::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[11,"write_to_io","","Render this into something that implements io::Write.",7,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"generics":["error"],"name":"result"}}],[11,"size_hint","","Returns a (very) rough estimate of how many bytes this Render will use.",6,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}]],"paths":[[3,"Error"],[3,"Raw"],[3,"TemplateBuffer"],[3,"FnRenderer"],[8,"Render"],[8,"RenderMut"],[8,"RenderOnce"],[8,"Template"]]};
initSearch(searchIndex);
