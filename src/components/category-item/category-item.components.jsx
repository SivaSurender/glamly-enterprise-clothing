import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Show Now!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
