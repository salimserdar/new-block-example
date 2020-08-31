import {
    RichText,
    AlignmentToolbar,
    BlockControls,
  } from "@wordpress/block-editor";
  
  const edit = (props) => {
    const { categories, selectedCategory } = props.attributes;

    if (!categories) {
      wp.apiFetch({
        url: "/wp-json/wp/v2/categories",
      })
        .then((categories) => {
          props.setAttributes({
            categories,
          });
        })
        .catch((err) => console.log(err));
    }

    if (!categories) {
      return "Loading...";
    }

    if (categories && categories.lenght === 0) {
      return "No categories found!";
    }

    if (categories && categories.lenght === 0) {
      return "No categories found!";
    }

    const updateCategory = (e) => {
      console.log("Selected");
      props.setAttributes({
        selectedCategory: e.target.value,
      });
    };

    return (
      <div className={props.className}>
        <select onChange={updateCategory} value={selectedCategory}>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  
  export default edit;