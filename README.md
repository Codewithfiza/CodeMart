# 🛒 CodeMart – E-commerce Web Application

CodeMart is a modern e-commerce web application built with **Next.js (App Router)**. It provides a smooth shopping experience with dynamic product pages, cart functionality using Redux Toolkit, and SEO optimization.

---

## 🚀 Features

* 🏠 **Homepage & Shop Page** – Browse all available products
* 📦 **Dynamic Product Pages** – Each product has its own page using dynamic routing (`/product/[id]`)
* 🛒 **Cart System** – Add, remove, and update product quantities using **Redux Toolkit**
* 💳 **Checkout Flow** – Simple checkout form with order confirmation
* 📄 **Order Confirmation Page** – Displays order details after purchase
* 🔍 **SEO Optimization** – Metadata, sitemap, and robots configuration
* 📱 **Responsive Design** – Works across all devices

---

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **API:** DummyJSON (for product data)
* **Notifications:** React Hot Toast

---

## 📂 Project Structure

```
src/app/
│
├── page.js                # Homepage
├── shop-server/           # Product listing page
├── product/[id]/          # Dynamic product detail pages
├── cart/                  # Cart page
├── checkout/              # Checkout page
├── order-confirmed/       # Order success page
├── about-us/              # About page
├── contact/               # Contact page
│
├── redux/
│   ├── store.js
│   ├── Provider.jsx
│   └── features/
│       └── cartslice.js   # Cart logic (Redux Toolkit)
│
├── components/
│   ├── common/
│   ├── productlistserver/
│   └── shop-components/
```

---

## 🔄 Dynamic Routing

Product detail pages are created using Next.js dynamic routes:

```
/product/[id]
```

Each product page fetches data from the API and dynamically generates content and SEO metadata.

---

## 🛒 Cart Functionality (Redux Toolkit)

* Add items to cart
* Remove items
* Update quantity
* Calculate total price

Redux Toolkit is used for efficient and scalable state management.

---

## 🔍 SEO Optimization

* Global metadata in `layout.js`
* `robots.js` to control crawling
* `sitemap.js` to guide search engines


---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/CodeMart.git
```

2. Navigate to the project:

```bash
cd CodeMart
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🌐 Deployment

This project is deployed using **Vercel**.

Steps:

1. Push project to GitHub
2. Import repo in Vercel
3. Deploy with default settings

---

## 📌 Future Improvements

* Add authentication (login/signup)
* Integrate real payment gateway
* Improve product filtering & search
* Add product reviews and ratings
* Use a real backend instead of dummy API

---

## 👩‍💻 Author

**Fiza Hassan**
Frontend Developer (Next.js, React)

---

## ⭐ Acknowledgements

* DummyJSON API for product data
* Next.js documentation
* Redux Toolkit

---

## 📄 License

This project is open-source and available for learning purposes.
