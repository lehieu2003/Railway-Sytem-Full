---
# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:
### Register Sceenshot
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/5fb583eb-83ff-454f-a8dc-19802ea5c51c)
### Login Sceenshot and Chatbox
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/b2c4176f-2cf4-4d1c-97fc-beb087b35bf0)
### Home Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/d57152ff-dad1-4254-baa8-52e96e3d905f)
### Find routes Sceenshot


![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/bf1d8896-3813-426c-a6f6-6fec19f897e5)
###  Discount and Meaning of Symbols Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/7f3e3aca-a036-4a63-9e0e-fa5d4786cc40)
### Fill Information form Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/93a5c25e-275f-4f79-affd-dcb7c0212815)
### Confirm Information Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/3bd983d7-3512-48c4-a1ed-fbc0185d620c)
### VNP Payment Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/70ca4b95-930b-46e3-994e-3ff5adfd35f3)
### Done page Sceenshot
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/a6c260df-c452-4667-923a-5da3880a7fcf)
### Check ticket information Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/460dea8f-4434-439c-93b6-069b35ff48e3)
### List of ticket Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/f81e98f4-99be-4dae-8d9a-a899d9e7667a)

### Admin dashboard Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/b9a34f37-0b0c-41fa-865b-d8276ec4b8dd)
### User Management Sceenshot

![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/8c383f35-9dc3-4b7f-b43f-e477d90c294f)

### Edit User Management Sceenshot
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/9ef5240f-3c82-46ba-8666-3fecc64668f3)

### Train Management Sceenshot
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/d2dc6c8f-58c3-4d04-bccf-849510a821fb)
### Edit Train Management Sceenshot


![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/47906c14-1dab-4795-a13b-d7711199398e)\
### Show Detailed Ticket Sceenshot
![image](https://github.com/lehieu2003/Railway-Sytem-Full/assets/127474151/5b283f57-4891-4e9a-a682-d24503fe348a)


---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/said7388/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "HIEU LEE",
  profile: "/profile1.png",
  designation: "Software Developer",
  description:
    "My name is Hieu, and I am a third-year Software Engineering student at International University. I have hands-on experience building web applications using ReactJS, React Native, NodeJS, and Java. With my knowledge of UI/UX design, I enjoy solving front-end problems and creating the best user experience for users. I am also committed to learning new technologies and best practices to become a better engineer.",
  email: "lehieunghiahanh76@gmail.com",
  phone: "0868296322",
  address: "Thu Duc, Ho Chi Minh City, Vietnam",
  github: "https://github.com/lehieu2003",
  facebook: "https://www.facebook.com/profile.php?id=100049807973142",
  linkedIn: "https://www.linkedin.com/in/hieu-le-202859311/",
  resume:
    "https://drive.google.com/file/d/10qb_Wh2vuD1f8S0B51Iob-31lmZX7D1Q/view?usp=sharing",
};

```

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---

