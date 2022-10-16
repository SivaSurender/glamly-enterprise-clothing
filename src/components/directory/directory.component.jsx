import CategoryItem from "../category-item/category-item.components";
import "./directory.component.scss";

export const DirectroyComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
