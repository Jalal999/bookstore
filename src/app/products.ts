export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    imgPath?: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Learn React',
      price: 799,
      description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
      imgPath: '../../../assets/images/book_image_1.jpg'
    },
    {
      id: 2,
      name: 'Java Programming Language',
      price: 699,
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      imgPath: '../../../assets/images/book_image_2.jpg'
    },
    {
      id: 3,
      name: 'Amazon Book',
      price: 299,
      description: 'Amazon Books is a customer-focused store, designed to spur discovery; a place where customers can find great books and products, and learn more about our services',
      imgPath: '../../../assets/images/book_image_3.jpg'
    }
  ];
