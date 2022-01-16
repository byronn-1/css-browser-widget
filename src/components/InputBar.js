import React from 'react';

export const InputBar = () => {
  return (
    <div>
      <form>
        <input type="radio"
          id="boxModel"
          name="css_type"
          value="box" />
        <label for="boxModel">Box Model</label>
        <br />
        <input type="radio"
          id="flexbox"
          name="css_type"
          value="flex-container" />
        <label for="flexbox">Box Model</label>
        <br />
        <input type="radio"
          id="css_grid"
          name="css_type"
          value="grid" />
        <label for="css_grid">Grid</label>
      </form>
    </div>
  )
}