import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Main2() {

    let sub=true;
    let parent=true;

    const data = [
        {
            "department": "customer_service",
            "sub_departments": [
                "support",
                "customer_success"
            ]
        },
        {
            "department": "design",
            "sub_departments": [
                "graphic_design",
                "product_design",
                "web_design"
            ]
        }
    ]


    const showHide = (element) => {
        if (element.target.offsetParent.childNodes[2].style.height === "0px")
            element.target.offsetParent.childNodes[2].style.height = "fit-content";
        else
            element.target.offsetParent.childNodes[2].style.height = "0px";
        // console.log(element.target.offsetParent.childNodes[2]);
    }

    const checkUncheck = (element) => {
        element.target.offsetParent.offsetParent.childNodes[2].childNodes.forEach(elem => {
            if (elem.control.checked !== element.target.checked)
                elem.childNodes[0].click();
            // console.log(elem.childNodes[0]);
        });
    }


    const checkAll = (element)=>{
        element.target.offsetParent.offsetParent.childNodes[2].childNodes.forEach(elem => {
            if (!elem.control.checked)
            {
                allChecked=false;
            }
                console.log(elem.childNodes[0]);
                // elem.childNodes[0].click();
        });
    }

    return (
        <div className='main2'>
            <h1>Component 2</h1>
            <div>
                {data.map(dept => {
                    return (
                        <FormGroup className='list'>
                            <button onClick={(element) => { showHide(element) }}></button>
                            <FormControlLabel control={<Checkbox defaultChecked onClick={(element) => { checkUncheck(element) }} />} label={dept.department} className='listHead' style={{ margin: "0px 20px" }} />
                            <div className='subList'>
                                {dept.sub_departments.map(subElement => {
                                    return (<FormControlLabel control={<Checkbox defaultChecked onClick={(element) => { checkAll(element) }} />} label={subElement} style={{ margin: "0px 40px" }} />)
                                })}</div>
                        </FormGroup>
                    )
                })}
            </div>
        </div>
    )
}

export default Main2