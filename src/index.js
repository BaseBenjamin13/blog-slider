import React, { useState } from 'react';

export default function BlogSlider(props) {

    const [blogIndex, setBlogIndex] = useState(0)
    const [tabIndex, setTabIndex] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [blogClass, setBlogClass] = useState("blogContentShowFromRight")


    const selectedCategoryColor = props.selectedCategoryColor ? props.selectedCategoryColor : 'white'
    const categoryColor = props.categoryColor ? props.categoryColor : 'black'

    const color = props.color ? props.color : 'black'
    const backgroundColor = props.backgroundColor ? props.backgroundColor : '#F2F2F2';
    const btnBackgroundColor = props.btnBackgroundColor ? props.btnBackgroundColor : '#3D9DD9';

    const btnStyle = {
        width: '50%',
        color: '#F2F2F2',
        backgroundColor: btnBackgroundColor,
        borderRadius: '20px',
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
    }


    const handleChangeBlogIndex = (num) => {
        if (num === 1 && blogIndex < props.blogContent[selectedCategory].blogs.length - 1 || num === -1 && blogIndex >= 1) {
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
                backgroundColor: backgroundColor,
                color: color,
            }}
        >
            {props.title && <h1>{props.title}</h1>}

            <div className="categorysContainer">
                {
                    props.showCategorys ?
                        props.blogContent.map((item, index) => {
                            return (
                                <div
                                    className="categoryContainer"
                                    key={index}
                                    onClick={() => {
                                        setSelectedCategory(index)
                                        setBlogIndex(0)
                                    }}
                                    style={{
                                        backgroundColor: index == selectedCategory ? btnBackgroundColor : null
                                    }}
                                >
                                    <h2
                                        style={{
                                            color: index === selectedCategory ? selectedCategoryColor : categoryColor
                                        }}
                                    >{item.category}</h2>
                                </div>
                            )
                        })
                        : null
                }
            </div>

            <div className="blogContentContainer">
                <div className="blogTextContainer">
                    <p className={blogClass}>

                        {props.blogContent[selectedCategory].blogs[blogIndex].title &&
                            <span className="blogTitle">{props.blogContent[selectedCategory].blogs[blogIndex].title}</span>
                        }
                        {props.blogContent[selectedCategory].blogs[blogIndex].content}
                    </p>
                </div>
                <div className="blogNavContainer">
                    <div
                        onClick={() => handleChangeBlogIndex(-1)}
                        className="blogBackBtn"
                        style={btnStyle}
                    >
                        <h1>Back</h1>
                    </div>
                    <div
                        className="blogNextBtn"
                        onClick={() => handleChangeBlogIndex(1)}
                        style={btnStyle}
                    >
                        <h1>Next</h1>
                    </div>
                </div>
            </div>

        </div >
    )
}
