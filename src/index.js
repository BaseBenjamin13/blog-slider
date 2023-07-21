import React, { useState } from 'react';
// import '../blog-slider.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function BlogSlider(props) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [blogClass, setBlogClass] = useState("blogContentShowFromRight")

  

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
        <div className="blogContainer">
        {/* <div className={styles.blogContainer}> */}
            <h1>Main Blog</h1>
            <Tabs onSelect={() => setBlogIndex(0)}>
                <TabList>
                    {
                        props.showCategorys ?
                            props.blogContent.map((item, index) => {
                                return <Tab key={index}>{item.category}</Tab>
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
                                        <button className="blogBackBtn" onClick={() => handleChangeBlogIndex(-1, index)}>Back</button>
                                        <button className="blogNextBtn" onClick={() => handleChangeBlogIndex(1, index)}>Next</button>
                                        {/* <button className={styles.blogBackBtn} onClick={() => handleChangeBlogIndex(-1, index)}>Back</button>
                                        <button className={styles.blogNextBtn} onClick={() => handleChangeBlogIndex(1, index)}>Next</button> */}
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
