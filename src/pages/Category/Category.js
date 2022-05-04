import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Category.scss";
import { config } from "../../config";

const LIMIT = 4;

const Category = () => {
  const [itemLists, setItemLists] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    fetch(
      `${config.category}/${params.id}${
        location.search || `?limit=${LIMIT}&offset=0`
      }`
    )
      .then(res => res.json())
      .then(res => {
        setItemLists(res.products);
      });
  }, [params.id]);

  useEffect(() => {
    fetch(
      `${config.category}/${params.id}${
        location.search || `?limit=${LIMIT}&offset=0`
      }`
    )
      .then(res => res.json())
      .then(res => {
        const copyArray = [...res.products];
        setItemLists(itemLists.concat(copyArray));
      });
  }, [page]);

  const updateOffset = e => {
    const offset = page * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    setPage(page + 1);
    navigate(`${queryString}`);
  };

  return (
    <>
      <header className="category">
        <div className="categoryContainer">
          {categoryInfo.length !== 0 && (
            <>
              <div className="categoryHeader">
                <h1>
                  {categoryInfo[0].category_name}
                  <p>총{itemLists.length}개</p>
                </h1>
              </div>
              <div className="categoryInfo">
                <p>{categoryInfo[0].category_detail}</p>
              </div>
            </>
          )}
        </div>
      </header>
      <ItemContainer
        name="itemsInCategory"
        title="요즘 잘 나가요"
        itemLists={itemLists}
        updateOffset={updateOffset}
      />
    </>
  );
};

export default Category;
