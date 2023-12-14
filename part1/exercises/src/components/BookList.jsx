export default function BookList() {
   let newBooks = "shrug";
   let book1 = "https://images-na.ssl-images-amazon.com/images/I/91E3pwI7MbL._AC_UL254_SR254,254_.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WebVcbSxL._AC_UL254_SR254,254_.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/I/61nl0iUliZL._AC_UL254_SR254,254_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Art of Mixology" />
         <img src={book2} alt="Letters from a Stoic" />
         <img src={book3} alt="What Money Can't Buy" />
      </div>      
   );
}