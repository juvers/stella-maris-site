import React from 'react';
import PropTypes from 'prop-types';

const ColumnLayout = ({data}) => {
    return(
        <>
            <div className="row mb-5">
                <div className="col-md-12 ">
                    <h2 className="text-uppercase text-center pb-2">{data.title}</h2>
                    <p className="text-justify">{data.content}</p>
                    <p className="text-justify">{data?.content2}</p>
                    <p className="text-justify">{data?.content3}</p>
                    <p>{data?.signature}</p>

                </div>
            </div>
        </>
    )
};

ColumnLayout.propTypes={
    data: PropTypes.object
}

export default ColumnLayout;