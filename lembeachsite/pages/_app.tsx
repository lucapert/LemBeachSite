import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var $ = require('jquery');
    require('jqueryui');
    // When the user scrolls the page, execute myFunction
    window.document.body.onscroll = function() {
      myFunction()
    };

    // Get the header
    var header = window.document.getElementById("nav-bar");

    // Get the offset position of the navbar
    var stickyHeader = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > stickyHeader) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }

      /* Check the location of each desired element */
      $('#textRow > div').each( function(i){     
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);  
        }
      }); 
    }
}, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
