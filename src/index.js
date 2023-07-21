import React, { useState } from 'react';
// import styles from './styles/BlogSlider.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function BlogSlider(props) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [blogClass, setBlogClass] = useState(styles.blogContentShowFromRight)


    const handleChangeBlogIndex = (num, index) => {
        if (num === 1 && blogIndex < props.blogContent[index].blogs.length - 1 || num === -1 && blogIndex >= 1) {
            if (num === -1) setBlogClass(styles.blogContentHideToRight)
            if (num === 1) setBlogClass(styles.blogContentHideToLeft)
            const changeIndex = () => {
                if (num === -1) setBlogClass(styles.blogContentShowFromLeft)
                if (num === 1) setBlogClass(styles.blogContentShowFromRight)
                setBlogIndex(blogIndex + num);
            }
            setTimeout(changeIndex, 500)
        }
    }

    return (
        props.blogContent &&
        <div className={styles.blogContainer}>
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
                                <div className={styles.blogContentContainer}>
                                    <div>
                                        <p className={blogClass}>
                                            <span className={styles.blogTitle}>{item.blogs[blogIndex].title}</span>
                                            {item.blogs[blogIndex].content}
                                        </p>
                                    </div>
                                    <div className={styles.blogNavContainer}>
                                        <button className={styles.blogBackBtn} onClick={() => handleChangeBlogIndex(-1, index)}>Back</button>
                                        <button className={styles.blogNextBtn} onClick={() => handleChangeBlogIndex(1, index)}>Next</button>
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

const styles = {
    blogContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // backgroundColor: var(--myGray),
        width: '80vw',
        borderRadius: '50px',
        margin: '0 auto',
        marginTop: '1rem',
        padding: '1rem',
        // color: var(--myDarkGray),
    },
    
    blogContentContainer: {
        // text-align: center;
    },
    
    blogTitle: {
        // font-size: 200%;
        // margin: 5px;
    },
    
    // blogContentShowFromRight, blogContentShowFromLeft, blogContentHideToRight, blogContentHideToLeft: {
        // font-size: 120%;
        // margin: 1rem;
    // },
    
    blogContentShowFromRight: {
        // animation: showFromRight 500ms 1;
    },
    blogContentShowFromLeft: {
        // animation: showFromLeft 500ms 1;
    },
    blogContentHideToRight: {
        // animation: hideToRight 600ms 1;
    },
    blogContentHideToLeft: {
        // animation: hideToLeft 600ms 1;
    },
    
    // blogBackBtn, blogNextBtn: {
        // margin: 5px;
        // margin-left: 10px;
        // margin-right: 10px;
        // font-size: 140%;
    // },
    
    
    // @keyframes showFromRight {
    //     0% {
    //         transform: translateX(110%);
    //     }
    //     100% {
    //         transform: translateX(0%);
    //     }
    // }
    // @keyframes showFromLeft {
    //     0% {
    //         transform: translateX(-110%);
    //     }
    //     100% {
    //         transform: translateX(0%);
    //     }
    // }
    // @keyframes hideToLeft {
    //     0% {
    //         transform: translateX(0%);
    //     }
    //     100% {
    //         transform: translateX(-110%);
    //     }
    // }
    // @keyframes hideToRight {
    //     0% {
    //         transform: translateX(0%);
    //     }
    //     100% {
    //         transform: translateX(110%);
    //     }
    // }
    
}
