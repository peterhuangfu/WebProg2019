import React from "react";

import computer from "./img/desktop2.png"
import seo from "./img/seo.png";

export default ({ id }) => {
    if (id === "Computer") {
        return (
            <div className="large-9 columns" role="content">
                <article>
                    <h1><a href="#">Computer</a></h1>
                    <p className="article_pub-date">Published
                        <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                    </p>

                    <div className="row">
                        <div className="large-12 columns">
                            <img className="float-right" src={computer} />
                            <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>
                            <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                            <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                            <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                        </div>
                    </div>
                </article>
                <hr />
            </div>
        );
    } else if (id === "Google") {
        return(
            <div className="large-9 columns" role="content">
                <article>
                    <h1><a href="#">Google</a></h1>
                    <p className="article_pub-date">Published
                        <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                    </p>
                    <div className="row">
                        <div className="large-12 columns">
                            <img className="float-left" src={seo} />
                            <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>
                            <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                            <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                            <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                        </div>
                    </div>
                </article>
                <hr />
            </div>
        );
    } else {
        return (
            <article>
                <h1>Post #{id}</h1>
                <p>This is the {id}-th post</p>
            </article>
        );
    }
};
