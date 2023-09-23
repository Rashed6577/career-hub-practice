
import PropTypes from 'prop-types';

const Categories = ({ category }) => {

    const { logo, category_name, availability } = category

    return (

        <div className="p-10 bg-gradient-to-r from-[#7E90FE0A] to-[#9873FF0D] rounded-lg w-80 h-60">
            <img className='bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-4 rounded-lg' src={logo} alt="" />
            <h4 className="text-xl font-bold text-[#474747] mt-8">{category_name}</h4>
            <p className='mt-2 font-medium text-[#A3A3A3]'>{availability}</p>
        </div>

    );
};

Categories.propTypes = {
    category: PropTypes.object.isRequired
}

export default Categories;