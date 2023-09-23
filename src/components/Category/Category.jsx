import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div className="container mx-auto px-10 my-20">
            <h2 className="text-center text-5xl font-extrabold text-[#1A1919]">Job Category List</h2>
            <p className="text-base font-medium text-center text-[#757575] mt-4 mb-16">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between gap-6">
                {
                    categories.map(category => <Categories key={category.id} category={category}></Categories>)
                }
            </div>
        </div>
    );
};

export default Category;