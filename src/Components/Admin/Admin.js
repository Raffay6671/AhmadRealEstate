import React, { Component } from 'react'

export default class Admin extends Component {
  render() {
    return (
      <div>
      <h1>Admin Dashboard</h1>

      <h2>Add New House</h2>
      <form onSubmit={handleAddHouse}>
        <input type="text" name="image" placeholder="Image URL" required />
        <input type="text" name="size" placeholder="Size" required />
        <input type="text" name="location" placeholder="Location" required />
        <input type="number" name="bedrooms" placeholder="Bedrooms" required />
        <input type="number" name="toilets" placeholder="Toilets" required />
        <button type="submit">Add House</button>
      </form>

      {/* Houses for Sale */}
      <h2>Houses for Sale</h2>
      {houses.map((house, index) => (
        <div className="house" key={index}>
          <img src= "hehe" alt={`House ${index + 1}`} />
          <p>Size: "heh"</p>
          <p>Location: {house.location}</p>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Toilets: {house.toilets}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}

      {/* Houses for Rent */}
      <h2>Houses for Rent</h2>
      {/* Render houses for rent similarly */}

    </div>
    )
  }
}
