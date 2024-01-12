import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksApi from "../../service/api/books";

import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../store/loader";
import { message } from "antd";
import LoaderUI from "../../components/loader";
import BookCard from "../../components/card";

const AllBooks = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state);
  const { id } = useParams();
  const { getOneBookById, getAllBooks } = useBooksApi();
  const [allBooks, setAllBooks]: any = useState([]);

  useEffect(() => {
    dispatch(startLoading(true));
    getOneBookById(id)
      .then((res) => {
        setOneBook(res.data);
        res.data && dispatch(endLoading(false));
      })
      .catch((err: any) => {
        message.error(err.message);
        err && dispatch(endLoading(false));
      });

    getAllBooks()
      .then((res) => {
        setAllBooks(res.data);
      })
      .catch((err: any) => {
        message.error(err.message);
      });
  }, [id]);
  console.log(allBooks);
  return (
    <div className="container-box">
      {isLoading ? (
        <LoaderUI />
      ) : (
        <div>
          <div className="flex items-center justify-between mt-[100px] mb-[20px]">
            <h2 className="text-[#C9AC8C] font-crimson text-[25px]">
              All Books
            </h2>
          </div>

          <div className="flex items-start flex-wrap gap-[40px] mb-[50px]">
            {allBooks?.map((kitob: any, index: number) => (
              <BookCard
                key={index}
                price={kitob?.price}
                book_cover={kitob?.book_cover}
                title={kitob?.title}
                pages={kitob?.pages}
                description={kitob?.description}
                year={kitob?.year}
                id={kitob?.id}
                name={`${kitob?.author?.first_name} ${kitob?.author?.last_name}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
