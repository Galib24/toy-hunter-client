import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './categoryCard';

const TabPart = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    // const {img1,img2,img3,img4,img5,img6} = categories;
    
    return (
        <div>
            <h3 className="text-5xl text-center mt-5 text-violet-600 font-bold">Toy Area</h3>
            <Tabs className='mt-5 mb-5'>
                <TabList>
                    <Tab>Math Toys</Tab>
                    <Tab>Language Toys</Tab>
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
                        categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                        >

                        </CategoryCard>)
                    }
                 </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabPart;