#![feature(test)]
extern crate test;

#[macro_use]
extern crate horrorshow;

use horrorshow::Template;

#[bench]
fn bench_fmt(b: &mut test::Bencher) {
    b.iter(|| {
        use std::fmt::Write;
        let mut s = String::new();
        let template = html! {
            html {
                head {
                    title { : "Hello world!" }
                }
                body {
                    // attributes
                    h1(id="heading") {
                        // Insert escaped text (actually, anything that defines Display)
                        : "Hello! This is <html />"
                    }
                    // Insert raw text (unescaped)
                    p : raw!("Let's <i>count</i> to 10!");
                    ol(id="count") {
                        // run some inline code...
                        |mut tmpl| for i in 0..10 {
                            // append to the current template.
                            // store output because rust bug #25753
                            tmpl = tmpl << html! {
                                li {
                                    // format some text
                                    #{"{}", i+1 }
                                }
                            };
                        }
                    }
                    // You need semi-colons for tags without children.
                    br; br;
                    p : "Easy!"
                }
            }
        };
        template.write_to_fmt(&mut s).unwrap();
        test::black_box(s);
    });
}

#[bench]
fn bench_short(b: &mut test::Bencher) {
    b.iter(|| {
        test::black_box(html! {
            html {
                head {
                    title { : "Hello world!" }
                }
                body {
                    // attributes
                    h1(id="heading") {
                        // Insert escaped text (actually, anything that defines Display)
                        : "Hello! This is <html />"
                    }
                    // Insert raw text (unescaped)
                    p : raw!("Let's <i>count</i> to 10!");
                    ol(id="count") {
                        // run some inline code...
                        |mut tmpl| for i in 0..10 {
                            // append to the current template.
                            // store output because rust bug #25753
                            tmpl = tmpl << html! {
                                li {
                                    // format some text
                                    #{"{}", i+1 }
                                }
                            };
                        }
                    }
                    // You need semi-colons for tags without children.
                    br; br;
                    p : "Easy!"
                }
            }
        }.into_string().unwrap());
    });
}

#[bench]
fn bench_long(b: &mut test::Bencher) {
    let count = test::black_box(100);
    b.iter(|| {
        test::black_box(html! {
            html {
                head {
                    title { : "Hello world!" }
                }
                body {
                    // attributes
                    h1(id="heading") {
                        // Insert escaped text (actually, anything that defines Display)
                        : "Hello! This is <html />"
                    }
                    // Insert raw text (unescaped)
                    p : raw!("Let's <i>count</i> to 10!");
                    ol(id="count") {
                        // run some inline code...
                        |mut tmpl| for i in 0..count {
                            // append to the current template.
                            // store output because rust bug #25753
                            tmpl = tmpl << html! {
                                li {
                                    // format some text
                                    #{"{}", i+1 }
                                }
                            };
                        }
                    }
                    // You need semi-colons for tags without children.
                    br; br;
                    p : "Easy!"
                }
            }
        }.into_string().unwrap());
    });
}
