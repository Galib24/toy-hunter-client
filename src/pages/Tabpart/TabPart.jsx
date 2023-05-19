import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './categoryCard';
import CategoryCard1 from './CategoryCard1';
import CategoryCard2 from './CategoryCard2';
import CategoryCard3 from './CategoryCard3';

const TabPart = () => {
    const [categories, setCategories] = useState([]);
    const [categories1, setCategories1] = useState([]);
    const [categories2, setCategories2] = useState([]);
    const [categories3, setCategories3] = useState([]);

    useEffect(()=>{
        fetch('https://toy-hunter-server-delta.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    useEffect(()=>{
        fetch('https://toy-hunter-server-delta.vercel.app/categories1')
        .then(res => res.json())
        .then(data => setCategories1(data))
    },[])
    useEffect(()=>{
        fetch('https://toy-hunter-server-delta.vercel.app/categories2')
        .then(res => res.json())
        .then(data => setCategories2(data))
    },[])
    useEffect(()=>{
        fetch('https://toy-hunter-server-delta.vercel.app/categories3')
        .then(res => res.json())
        .then(data => setCategories3(data))
    },[])


    console.log(categories1);
    console.log(categories2);
    console.log(categories3);

    // const {img1,img2,img3,img4,img5,img6} = categories;
    
    return (
        <div>
            <h3 className="text-5xl text-center mt-5 text-violet-600 font-bold">Toy Area</h3>
            <Tabs className='mt-5 mb-5'>
                <TabList>
                    <Tab>All Category</Tab>
                    <Tab>Math Toys</Tab>
                    <Tab>Language Toy</Tab>
                    <Tab>Engineering toys</Tab>
                </TabList>

                <TabPanel>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                        >

                        </CategoryCard>)
                    }
                 </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories1.map(category1 => <CategoryCard1
                        key={category1._id}
                        category1={category1}
                        >

                        </CategoryCard1>)
                    }
                 </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories2.map(category2 => <CategoryCard2
                        key={category2._id}
                        category2={category2}
                        >

                        </CategoryCard2>)
                    }
                 </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories3.map(category3 => <CategoryCard3
                        key={category3._id}
                        category3={category3}
                        >

                        </CategoryCard3>)
                    }
                 </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabPart;