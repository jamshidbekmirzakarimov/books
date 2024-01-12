import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBooksApi from "../../service/api/books";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../store/loader";
import { message } from "antd";
import LoaderUI from "../../components/loader";
import BookCard from "../../components/card";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state);
  const { id } = useParams();
  const { getOneBookById, getAllBooks } = useBooksApi();
  const [oneBook, setOneBook]: any = useState({});
  const [allBooks, setAllBooks]: any = useState([]);
  const navigate = useNavigate();

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
          <div className="pt-[57px] w-full flex items-start gap-[50px]">
            <div className="w-[520px] object-cover rounded-lg overflow-hidden">
              {oneBook?.book_cover?.length ? (
                <img
                  className="w-full h-full"
                  src={`https://literature-18wr.onrender.com/api/image/${oneBook?.book_cover}`}
                  alt={oneBook?.title}
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src="https://removal.ai/wp-content/uploads/2021/02/no-img.png"
                  alt={oneBook?.title}
                />
              )}
            </div>
            <div className="flex-grow">
              <h1 className="font-rotterburg text-[40px] mb-[40px] text-[#C9AC8C]">
                {oneBook?.title}
              </h1>
              <span className="text-[#C9AC8C] font-crimson cursor-pointer text-[20px] hover:underline">
                Muharrir →
              </span>

              <div className="mt-[20px] flex flex-col gap-[10px]">
                <p className="flex items-center gap-[4px] text-black dark:text-white">
                  Nashr etilgan sana:{" "}
                  <span className="font-bold">
                    {new Date(oneBook?.createdAt).toLocaleDateString()}
                  </span>
                </p>
                <p className="flex items-center gap-[4px] text-black dark:text-white">
                  Kitob betlari soni:{" "}
                  <span className="font-bold">{oneBook?.pages} ta</span>
                </p>
                <p className="flex items-center gap-[4px] text-black dark:text-white">
                  Kitob narxi:{" "}
                  <span className="font-bold">{oneBook?.price} so'm</span>
                </p>
              </div>

              <div className="mt-[50px] mb-[10px] text-[#C9AC8C]">
                To'liq malumot ↓
              </div>
              <div className="p-[10px] rounded-lg bg-slate-100">
                {parse(`${oneBook?.description}`)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[100px] mb-[20px]">
            <h2 className="text-[#C9AC8C] font-crimson text-[25px]">
              Sizga yoqishi mumkin →
            </h2>

            <p
              onClick={() => navigate("/books")}
              className="cursor-pointer hover:text-[#C9AC8C] font-crimson text-[20px] hover:underline duration-100 text-[#C9AC8C]"
            >
              Barchasini ko'rish
            </p>
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

export default BookDetails;
