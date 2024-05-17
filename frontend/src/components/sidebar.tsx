import React from "react";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_div}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_inner}>
          <div className={styles.logo_categories}>
            <div className={styles.logo_div}>
              {/* <Image/> */}
              savage
            </div>

            <div className={styles.container}>
              <div className={styles.li_div}>
                <ul>
                  <li className={styles.li_el}>
                    <Image
                      src="/dashboard.png"
                      alt="dahsboard"
                      width={25}
                      height={25}
                      priority={true}
                    />
                    Dashboard
                  </li>
                  <li className={styles.li_el}>
                    <Image
                      src="/analyst.png"
                      alt="anaylst"
                      width={25}
                      height={25}
                      priority={true}
                    />
                    Sales
                  </li>
                  <li className={styles.li_el}>
                  <Image
                      src="/analyst.png"
                      alt="anaylst"
                      width={25}
                      height={25}
                      priority={true}
                    />
                    Leads</li>
                  <li className={styles.li_el}>
                  <Image
                      src="/analyst.png"
                      alt="anaylst"
                      width={25}
                      height={25}
                      priority={true}
                    />
                    Profile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.btn_div}>
            <div className={styles.btm_btn}>
            <Image
                      src="/logout.png"
                      alt="profile_pic"
                      width={25}
                      height={25}
                      priority={true}
                      />
              <button>profile</button>
            </div>
            <div className={styles.btm_btn}>
            <Image
                      src="/logout.png"
                      alt="logout"
                      width={25}
                      height={25}
                      priority={true}
                      />
              <button>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
