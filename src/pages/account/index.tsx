import { Button, Form, Image, Input, Tabs, message } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import useUsersApi from "../../service/api/users";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../store/loader";
import LoaderUI from "../../components/loader";
import { Navigate, useParams } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  confirm_password?: string;
};

const Account = () => {
  const { getOneUserById } = useUsersApi();
  const [me, setMe]: any = useState({});
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(startLoading(true));
    getOneUserById(localStorage.getItem("id"))
      .then((data) => {
        setMe(data.data);
        data && dispatch(endLoading(false));
      })
      .catch((err: any) => {
        dispatch(endLoading(false));
        message.error(err);
      });
  }, [id]);

  // const onFinish = (values: any) => {
  //   const formData = new FormData();
  //   for (const key in values) {
  //     formData.append(key, values[key]);
  //   }
  //   formData.append(
  //     "image",
  //     "https://cdn.bio.link/uploads/thumbnails/2023-09-17/BQBh8bGFFShDbye8nwwIk7NavnvvKSp3.png"
  //   );

  //   updateOneUserById({ ...formData }, me?.id).then((data) =>
  //     console.log(data?.data)
  //   );
  // };

  console.log(me?.id, id);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: me?.id === Number(id) ? "Profilim" : "Profil",
      children: (
        <div className="flex items-center gap-[30px] bg-slate-100 py-4 px-4 rounded-[10px]">
          <div
            className="w-[130px] h-[130px] rounded-[100%] flex items-center justify-center text-[80px] text-white"
            style={{
              backgroundColor: localStorage.getItem("avatar_theme") || "gray",
            }}
          >
            {me?.image === null ? (
              localStorage.getItem("first_name")?.slice(0, 1)
            ) : (
              <Image src={me?.image} />
            )}
          </div>
          <div>
            <h1 className="text-[30px] font-semibold">
              {me?.first_name + " " + me?.last_name}{" "}
            </h1>
            <h2 className={`text-[20px] font-medium text-gray-500`}>
              {me?.email}
            </h2>
            <p className="font-bold mt-[20px]">{me?.phone}</p>
          </div>
        </div>
      ),
    },
    {
      key: me?.id === Number(id) ? "2" : "",
      label: me?.id === Number(id) ? "Sozlamalar" : "",
      children: me?.id === Number(id) && (
        <div>
          <div className="flex gap-5 flex-col">
            <h1 className="text-[20px] font-semibold text-red-500">
              * Ma'lumotlarni o'zgartirib, saqlang!
            </h1>
            <Form
              className="w-full"
              name="basic"
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item<FieldType>
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi ismingizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.first_name}
                  size="large"
                  placeholder="Ismingizni kiriting"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi familiyangizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.last_name}
                  size="large"
                  placeholder="Familiyangizni kiriting"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi telefon raqamingizni kiriting!",
                  },
                ]}
              >
                <InputMask
                  mask="+\9\9\8\ (99) 999-99-99"
                  maskPlaceholder={null}
                  maskChar=" "
                  required={true}
                  type="tel"
                >
                  <Input
                    defaultValue={me?.phone}
                    size="large"
                    placeholder="Telefon raqamingizni kiriting"
                  />
                </InputMask>
              </Form.Item>

              <Form.Item<FieldType>
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Iltimos yangi emailingizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.email}
                  size="large"
                  placeholder="Emailingizni kiriting"
                />
              </Form.Item>

              <div className="flex items-center w-full gap-2">
                <Form.Item<FieldType>
                  name="password"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos yangi yangi parolingizni kiriting!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Yangi parolingizni kiriting!"
                  />
                </Form.Item>
                <Form.Item<FieldType>
                  className="w-full"
                  name="confirm_password"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos yangi yangi parolni takrorlang!",
                    },
                  ]}
                >
                  <Input.Password
                    className="w-full"
                    size="large"
                    placeholder="Yangi parolni takrorlang!"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button loading={false} type="primary" htmlType="submit">
                  Saqlash
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      ),
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      {isLoading ? (
        <LoaderUI />
      ) : (
        <div className="w-full max-w-[900px] mx-auto mt-[50px]">
          <div>
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
