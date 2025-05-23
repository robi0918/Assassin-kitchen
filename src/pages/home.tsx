import { useEffect } from "react";
import { useRouter } from "next/router";

import { animate } from "motion";
import { Button } from "antd";
import {
  AimOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { HomeLayout } from "../components/layouts/HomeLayout";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    animate(".homeContentAnimation", { opacity: [0, 1] }, { duration: 0.9 });
  }, []);

  return (
    <HomeLayout
      title="Assassin Kitchen"
      pageDescription="Your digital restaurant menu"
      imageUrl="https://res.cloudinary.com/dbzv9xfjp/image/upload/v1710746432/og-images/Magenta-kitchen-op_eecp7e.png"
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/1510692/pexels-photo-1510692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="restaurant dish"
        />

        <div className={"homeContentAnimation"}>
          <section className={styles.restaurantInformation}>
            <div className={styles.informationContainer}>
              <div>
                <AimOutlined /> Main St, Delicious City, London 9578, USA
              </div>
              <div>
                <ClockCircleOutlined /> Daily: 8:00 am to 11:00 pm
              </div>
            </div>
            <div className={styles.informationContainer}>
              <div>
                <PhoneOutlined /> <span>+1 234 43 55</span>
              </div>
              <div>
                <MailOutlined /> assassinstore@gmail.com
              </div>
            </div>
          </section>

          <section className={styles.titleContainer}>
            <h1 className={styles.title}>Where every flavor tells a story</h1>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push("/dishes")}
            >
              <ReadOutlined />
              VIEW OUR MENU
            </Button>
          </section>
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
