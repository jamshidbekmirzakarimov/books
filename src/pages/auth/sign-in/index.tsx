import { Button, Form, Input, message } from "antd";
import login_image from "../../../assets/images/login.svg";
import { Link, useNavigate } from "react-router-dom";
import useUsersApi from "../../../service/api/users";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../../store/loader";
import { ArrowLeftOutlined } from "@ant-design/icons";

type FieldType = {
  password?: string;
  email?: string;
};

const SignIn = () => {
  const { login } = useUsersApi();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  const onFinish = (values: any) => {
    dispatch(startLoading(true));
    login(values)
      .then((data) => {
        if (data) {
          message.success("Siz muvaffaqiyatli tizimga kirdingiz!");
          dispatch(endLoading(false));

          localStorage.setItem(
            "avatar_theme",
            colorList[Math.floor(Math.random() * colorList.length) - 1]
          );
          localStorage.setItem("token", data?.data.token);
          localStorage.setItem("first_name", data?.data?.user?.first_name);
          localStorage.setItem("last_name", data?.data?.user?.last_name);
          localStorage.setItem("id", data?.data?.user?.id);
          return localStorage.getItem("id") && navigate("/");
        }
        console.log(data);
      })
      .catch((err: any) => {
        if (err) {
          dispatch(endLoading(false));
          message.error(err?.response?.data?.message);
        }
      });
  };

  return (
    <div className="flex items-center h-screen w-full">
      <div className="bg-[#c9ac8c] flex-1 h-full w-[50%] select-none flex items-center justify-center">
        <img
          className="w-[800px] select-none"
          src={login_image}
          alt="Login poster image"
        />
      </div>
      <div className="flex-1 h-full w-[50%] flex items-center justify-center">
        <div className="flex flex-col w-full m-auto mt-auto mb-auto max-w-[350px]">
          <div
            onClick={() => navigate("/")}
            className="w-fit px-1 rounded-md hover:bg-gray-200 cursor-pointer mb-[50px]"
          >
            <ArrowLeftOutlined />
          </div>
          <h1 className="text-[36px] font-bold mb-[10px] select-none">
            Kirish
          </h1>
          <p className="p-0 text-[14px] font-normal mb-[30px]">
            Akkauntingiz yoqmi?{" "}
            <Link className="text-[#549FF9] underline" to={"/sign-up"}>
              Yangi akkaunt ochish!
            </Link>
          </p>
          <Form
            className="w-full"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Email`da xatolik bor",
                },
              ]}
            >
              <Input size="large" placeholder="Emailingizni kiriting" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "Iltimos parolni kiriting!" }]}
            >
              <Input.Password
                size="large"
                placeholder="Parolingizni kiriting"
              />
            </Form.Item>

            <Form.Item>
              <Button loading={isLoading} type="primary" htmlType="submit">
                Kirish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
