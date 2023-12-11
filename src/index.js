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
        {/* <div className={styles.blogContainer}> */}
            <h1>Main Blog</h1>
            <Tabs onSelect={() => setBlogIndex(0)}>
                <TabList>
                    {
                        props.showCategorys ?
                            props.blogContent.map((item, index) => {
                                return <Tab 
                                    key={index} 
                                    style={index == tabIndex ? {color:selectedColor}: null}
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
                                {/* <div className={styles.blogContentContainer}> */}
                                    <div>
                                        <p className={blogClass}>
                                            <span className="blogTitle">{item.blogs[blogIndex].title}</span>
                                            {/* // <span className={styles.blogTitle}>{item.blogs[blogIndex].title}</span> */}
                                            {item.blogs[blogIndex].content}
                                        </p>
                                    </div>
                                    <div className="blogNavContainer">
                                    {/* <div className={styles.blogNavContainer}> */}
                                        <button 
                                            className="blogBackBtn" 
                                            onClick={() => handleChangeBlogIndex(-1, index)}
                                            style={{color: color}}
                                            >
                                            Back
                                        </button>
                                        <button 
                                            className="blogNextBtn" 
                                            onClick={() => handleChangeBlogIndex(1, index)}
                                            style={{color: color}}
                                        >
                                            Next
                                        </button>
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
