import React, { useState } from 'react';
// import '../blog-slider.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function BlogSlider(props) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [tabIndex, setTabIndex] = useState(0)
    const [blogClass, setBlogClass] = useState("blogContentShowFromRight")
    const color = props.color ? props.color : 'black'
    const selectedColor = props.selectedColor ? props.selectedColor : props.color ? props.color : 'black'
    const btnBackgroundColor = props.btnBackgroundColor ? props.btnBackgroundColor : 'white';

    const btnStyle = {
        width : '50%',
        color: color,
        backgroundColor: btnBackgroundColor,
        borderRadius: '20px',
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        // maxWidth: '4rem',
        border: '1px solid black',
    }


    const handleChangeBlogIndex = (num, index) => {
        if (num === 1 && blogIndex < props.blogContent[index].blogs.length - 1 || num === -1 && blogIndex >= 1) {
            if (num === -1) setBlogClass("blogContentHideToRight")
            if (num === 1) setBlogClass("blogContentHideToLeft")
            const changeIndex = () => {
                if (num === -1) setBlogClass("blogContentShowFromLeft")
                if (num === 1) setBlogClass("blogContentShowFromRight")
                setBlogIndex(blogIndex + num);
            }
            setTimeout(changeIndex, 500)
        }
    }

    return (
        props.blogContent &&
        <div
            className="blogContainer"
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor : '#B4B4B4',
                color: color,
            }}
        >
            {props.title && <h1>{props.title}</h1>}
            <Tabs onSelect={() => setBlogIndex(0)}>
                <TabList>
                    {
                        props.showCategorys ?
                            props.blogContent.map((item, index) => {
                                return <Tab
                                    key={index}
                                    style={
                                        index == tabIndex ?
                                            { color: selectedColor, backgroundColor: btnBackgroundColor }
                                            : null
                                    }
                                    onClick={() => setTabIndex(index)}
                                >{item.category}</Tab>
                            })
                            : <Tab>General</Tab>
                    }
                </TabList>

                {
                    props.blogContent.map((item, index) => {
                        return (
                            <TabPanel key={index}>
                                <div className="blogContentContainer">
                                    <div>
                                        <p className={blogClass}>
                                            <span className="blogTitle">{item.blogs[blogIndex].title}</span>
                                            {item.blogs[blogIndex].content}
                                        </p>
                                    </div>
                                    <div className="blogNavContainer">
                                        <div
                                            onClick={() => handleChangeBlogIndex(-1, index)}
                                            className="blogBackBtn"
                                            style={btnStyle}
                                        >
                                            <h1>Back</h1>
                                        </div>
                                        <div
                                            className="blogNextBtn"
                                            onClick={() => handleChangeBlogIndex(1, index)}
                                                style={btnStyle}
                                            >
                                            <h1>Next</h1>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        )
                    })
                }
            </Tabs>
        </div>
    )
}
