# blog-slider

A React text slider package.

## Setup

- Install by executing `npm install blog-slider`.
- Import by adding `import BlogSlider from 'blog-slider'` & `import 'blog-slider/blog-slider.css'`.
- Use by adding `<BlogSlider />`.

### Default look.

![blog slider image](https://i.imgur.com/zwPm4cl.png)

## Here's an example of basic usage:

```js
    import BlogSlider from 'blog-slider';
    import 'blog-slider/blog-slider.css';

    export default function Home() {
        const [blogContent, setBlogContent] = useState([
        {
            category: 'State',
            blogs: [
                {
                    title: 'State Title #1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor quis vestibulum.Morbi lectus nisi, eleifend eget congue in, sollicitudin ipsum eros.Nulla elementum metus nec libero rutrum'
                },
                {
                    title: 'State Title #2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eu dolor vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },      
            ]
        },
        {
            category: 'Props',
            blogs: [
                {
                    title: 'Props Title #1',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
                {
                    title: 'Props Title #2',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },      
                {
                    title: 'Props Title #3',
                    content: 'Lacinia vulputate ante.Proin vel felis mi. Nulla dictum velit et metus auctor, nec pretium augue semper. Maecenas ac accumsan nisi.Vivamus finibus condimentum semper. Aliquam eget ipsum eros.Nulla elementum metus nec libero rutrum'
                },
            ]
        },            
    ])
    
    return(
        <>
            <BlogSlider 
                blogContent={blogContent} 
                title="My Blog"
                showCategorys={true} 
                backgroundColor='#B4B4B4'
                color='black'
                selectedColor="black"
                btnBackgroundColor="#38A169"
            />
        </>
    )
}
```