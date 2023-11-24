import React, { useEffect, useState } from 'react';
import Property from './Property';
import "../Styles/propertyList.css";
import datajson from "../dataa.json";
import Filter from './Filter';
import NoResultFound from './NoResultFound';

const PropertyList = (props) => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 12;

  const [city, setCity] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = datajson;
        await setData(jsonData);
        await setFilteredData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchData();
  }, []);

  const elementStyle = {
    marginLeft: '100px',
    marginRight: '100px',
  };
  useEffect(() => {
    const updateFilteredData = async () => {
      await setFilteredData(data.filter(
        (element) => (city === 'All' || element.address.split(', ').pop() === city)
      ));
    };

    if (filteredData) {
      updateFilteredData();
      setPageNo(1);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, ]);

  useEffect(() => {
    // Scroll to the top after page number is updated
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageNo]);

  // Calculate the start and end indices for the current page
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = pageNo * itemsPerPage;

  const displayedData = filteredData ? filteredData.slice(startIndex, endIndex) : [];

  return (
    <div>
      <Filter updateCity={setCity} />
      <p className="propertyListHeading">Properties for {props.type} in {city === "All" ? "All Cities" : city}</p>

      <div className='propertyListContainer'>
        {displayedData && displayedData.length > 0 ? displayedData.map((property) => (
          <Property
            key={property.elementNumber}
            elementNumber={property.elementNumber}
            imageUrl={property.imageUrl}
            numBed={property.numBed}
            numToilet={property.numToilet}
            size={property.size}
            price={property.price}
            address={property.address}
            uploadDate={property.uploadDate}
            style={elementStyle}
            setPropertyValues={props.setPropertyValues}
          />
        )) : <NoResultFound />}
      </div>

      {/* Pagination */}
      <div className='propertyListPagination'>
        <button
          onClick={() => setPageNo((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={pageNo === 1} // Disable if on the first page
          className='propertyListPaginationButton'
        >
          Previous
        </button>
        <span> Page {pageNo} </span>
        <button
          onClick={() => setPageNo((prevPage) => prevPage + 1)}
          disabled={endIndex >= (filteredData ? filteredData.length : 0)} // Disable if on the last page
          className='propertyListPaginationButton'
        >
          Next
        </button>
      </div>

    </div>
  );
};

PropertyList.defaultProps = {
  type: "Sale",
};

export default PropertyList;
