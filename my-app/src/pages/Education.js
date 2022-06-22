import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">APR 2016 - APR 2019</p>
                                    <small>
Students can work with faculty on research projects, Students get substantial industry exposure. placement sector here is good in college.faculty are also familiar with Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Master of Engineering <span className="h6">from Harvard University</span></h5>
                                    <p className="mb-0">APR 2019 - APR 2021</p>
                                    <small>The research at Harvard is the best and they got best equipment to run it. Also, the colleagues are intelligent and helpful. You work in the cutting edge of innovation. It has lot of research experience and collaboration with big industry.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;