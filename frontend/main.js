function loginDisplay() {
  document.getElementById("navigation_page").style.display = "none";
  document.getElementById("login_form_id").style.display = "block";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('cart_display_form').style.display="none"
  document.getElementById('o_History_display_form').style.display='none'
  sessionStorage.removeItem("token");
}
function displayMainPage() {
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "block";
  document.getElementById("book_container").style.display = "block";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('cart_display_form').style.display="none"
  document.getElementById('o_History_display_form').style.display='none'
}
function displayBookForm() {
  document.getElementById("add_book_id").style.display = "block";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('cart_display_form').style.display="none"
  document.getElementById('o_History_display_form').style.display='none'
}
function displayNewUserForm(event){
  event.preventDefault()
  document.getElementById("navigation_page").style.display = "none";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='flex';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('o_History_display_form').style.display='none';
  document.getElementById('cart_display_form').style.display="none"
}
function displayBankForm(event){
  event.preventDefault()
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="block"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('o_History_display_form').style.display='none';
  document.getElementById('cart_display_form').style.display="none";
}
function displayUpdateForm(){
  //event.preventDefault()
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById('o_History_display_form').style.display='none'
  document.getElementById("update_form_id").style.display="block";
  document.getElementById('cart_display_form').style.display="none"
}

function displayCartForm(){
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById('o_History_display_form').style.display='none'
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('cart_display_form').style.display="block"
}
function displayPaymentForm(){
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('o_History_display_form').style.display='none'
  document.getElementById('cart_display_form').style.display="block"
  document.getElementById('payment_form_id').style.display="block"
}
function displayOrderHistoryForm(){
  document.getElementById("navigation_page").style.display = "block";
  document.getElementById("login_form_id").style.display = "none";
  document.getElementById("add_book_id").style.display = "none";
  document.getElementById("book_container").style.display = "none";
  document.getElementById("error_div").style.display = "none";
  document.getElementById('signup_id').style.display='none';
  document.getElementById('new_bank_account_form').style.display="none"
  document.getElementById("card_information_id").style.display="none";
  document.getElementById("update_form_id").style.display="none";
  document.getElementById('cart_display_form').style.display="none"
  document.getElementById('payment_form_id').style.display="none"
  document.getElementById('o_History_display_form').style.display='block'

}
let totalPrice=0;
window.onload = function () {
  loginDisplay();
  
  //Login 
  document.getElementById("logout").onclick = loginDisplay;
  document.getElementById("login").onclick = loginPage;
   //user sign up 
   document.getElementById('create_new_account').onclick=displayNewUserForm;
   document.getElementById('signup_form_id').onclick=addNewUser;
   document.getElementById("creat_new_bank_Account_id").onclick=displayBankForm;
   document.getElementById('bank_account_submit').onclick=createNewBankAccount;
   document.getElementById('update_user_information_form').onclick=getCurrentUser;
   document.getElementById("update_user_information_btn").onclick=updateUserInfo;
   document.getElementById("view_cart_id").onclick=displayCartItem;
   document.getElementById('place_order_id').onclick=displayPaymentForm;
   document.getElementById('confirm_order_btn').onclick=placeOrder;
   document.getElementById('order_history_id').onclick=getOrderHistory;
  //  document.getElementById('o_total_price_id').onclick=displayOrderHistory;
  
  async function loginPage() {
   let username=document.getElementById("user_name").value;
   sessionStorage.setItem('username',username)
    const token = await (
      await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: document.getElementById("user_name").value,
          password: document.getElementById("password").value,
        }),
      })
    ).json();
    if (token.jwtToken) {
      sessionStorage.setItem("token", token.jwtToken);
      displayMainPage();
      fetchAllBooks();
      
    } else {
      document.getElementById("error_div").style.display = "block";
      document.getElementById("wrong_message").innerHTML = token.error;
    }
  }

  document.getElementById("addBtn").onclick = function (event) {
    const btnId = this.dataset.id;
    event.preventDefault();
    if (btnId) {
      fetch("http://localhost:3000/books/" + btnId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
           Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: document.getElementById("title").value,
          ISBN: document.getElementById("ISBN").value,
          publishDate: document.getElementById("publishDate").value,
          author: document.getElementById("author").value,
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          if(res.error!=="unauthorize"){
            document.getElementById("form-title").textContent = "Add a Book";
            document.getElementById("add_form").reset();
            document.getElementById("addBtn").dataset.id = "";
            // displayMainPage();
            // fetchAllBooks();
             location.reload();
          }else{
            alert(res.error+" to update")
          }
        });
    } else {
      addNewBook();
    }
  };
 
};

//fetch all books
async function fetchAllBooks() {
  const books = await (
    await fetch("http://localhost:3000/books", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
  ).json();
  const bookDisplay = document.getElementById("display-book");
  books.forEach((data) => {
    displayToClient(bookDisplay, data);
  });
}
function addNewBook() {
  {
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: document.getElementById("title").value,
        ISBN: document.getElementById("ISBN").value,
        publishDate: document.getElementById("publishDate").value,
        author: document.getElementById("author").value,
        price:document.getElementById('price').value
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.error === "unauthorize");
        if (data.error !== "unauthorize") {
          // document.getElementById('add_book_id').style.display='none';
          const bookContainer=document.createElement('div')
          bookContainer.style.display='flex'
          const bookDisplay = document.getElementById("display-book");
          console.log(data[0])
          displayToClient(bookDisplay, data[0]);
        }else{
          alert(data.error+" to add new books only admin can do")
        }
      });
  }
}
function displayToClient( bookDisplay, data) {
  const listInfo = document.createElement("div");
  listInfo.className = "col-lg-4";
  listInfo.style.marginTop="10px"
  // listInfo.style.marginLeft="5px"
  listInfo.id = data._id;
  const image = document.createElement("img");
  image.src = "./image/libraray.jpeg";
  image.alt = "image";
  image.width = "100";
  image.height = "60";
  const titleH = document.createElement("h2");
  titleH.innerHTML = data.title;
  const viewBtn = document.createElement("button");
  viewBtn.className = "btn btn-info";
  viewBtn.innerHTML = "view details";
  viewBtn.dataset.id = data._id;
  listInfo.append(image);
  listInfo.append(titleH);
  listInfo.append(viewBtn);
  bookDisplay.append(listInfo);
  //bookDisplay.style.display='flex';
  //bookContainer.append(bookDisplay)
  document.getElementById("add_form").reset();
  viewBtn.addEventListener("click", function () {
    const viewDetail = document.getElementById(`${data._id}`);
    const isbn = document.createElement("h5");
    isbn.innerHTML = "ISBN :" + data.ISBN;
    viewDetail.appendChild(isbn);
    const publishDate = document.createElement("h5");
    let date=new Date(data.publishDate)
     let dFormat=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    publishDate.innerHTML = "Publish date: " +dFormat;
    viewDetail.appendChild(publishDate);
    const author = document.createElement("h5");
    author.innerHTML = "Author: " + data.author;
    viewDetail.appendChild(author);
    const price = document.createElement("h5");
    price.innerHTML = "Price: " + data.price;
    viewDetail.appendChild(price);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerHTML = "delete";
    deleteBtn.dataset.id = data._id;
    viewDetail.append(deleteBtn);
    //update button
    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-warning";
    updateBtn.innerHTML = "update";
    updateBtn.dataset.id = data._id;
    viewDetail.append(updateBtn);
   //add cart button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-success";
    addToCartBtn.innerHTML = "Add to cart";
    addToCartBtn.dataset.id = data._id;
    viewDetail.append(addToCartBtn);
  //delete books
    deleteBtn.addEventListener("click", deleteBook)
    function deleteBook() {
      fetch("http://localhost:3000/books/" + data._id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }).then(data =>data.json())
      .then((res)=>{
        console.log(res)
       if(res.error !== "unauthorize"){
         console.log(res)
        viewDetail.remove();
       }else{
        alert(res.error+" to delete book only admin can do") 
       } 
      });
    };

    //update books
    updateBtn.addEventListener("click",getBook)

    function getBook() {
      fetch("http://localhost:3000/books/" + data._id, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
        .then((data) => data.json())
        .then((data) => {
          document.getElementById("form-title").textContent = "Edit a Product";
          document.getElementById("title").value = data.title;
          document.getElementById("ISBN").value = data.ISBN;
          document.getElementById("publishDate").value = data.publishDate;
          document.getElementById("author").value = data.author;
          document.getElementById("price").value = data.price;
          document.getElementById("addBtn").dataset.id = data._id;
        });
    };
 //Add to cart
 addToCartBtn.addEventListener("click",getItem) 
   
 async function getItem(){
   
 let cart= await( await fetch("http://localhost:3000/books/" + data._id, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  })).json()
  //  console.log(cart)
  //implment here post to cart data base
  saveToCart(cart)
 }
 async function saveToCart(cart){
  fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        title:cart.title,
        ISBN: cart.ISBN,
        publishDate:cart.publishDate,
        author: cart.author,
        price:cart.price,
        userName:sessionStorage.getItem('username')
      }),
    })
 }
 
});
}

async function createNewBankAccount(){
  let firstName=document.getElementById("b_first_name").value;
  let lastName=document.getElementById("b_last_name").value;
  let balance=document.getElementById("b_initial_deposit").value;
  let email=document.getElementById("b_input_email").value
  let csv=document.getElementById('b_security_code').value
  let SSN=document.getElementById('b_ssn').value
  let expDate=document.getElementById('b_exp_date').value
  
  if(!(firstName===""||lastName===""||balance==="" ||email===""||csv===""||SSN===""||expDate==="")){
 let accountInfo= await (
    await fetch("http://localhost:3000/banks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        balance:balance,
        email:email ,
        csv:csv,
        SSN:SSN,
        expDate:expDate
      }),
    })
  ).json();
  // console.log(accountInfo)
  document.getElementById("login_form_id").style.display = "none";
  //document.getElementById("new_bank_account_form").reset();
  document.getElementById('new_bank_account_form').style.display="none";
  document.getElementById("card_information_id").style.display="block";
  let cardNumber1=accountInfo.cardNumber;
  let cardExpDate=new Date(accountInfo.expDate);
  let dateEx=cardExpDate.getMonth()+"/"+cardExpDate.getDate()+"/"+cardExpDate.getFullYear();
  document.getElementById("r_card_number").innerHTML="Card number: " +cardNumber1;
  document.getElementById("r_card_expiry_date").innerHTML= "Expiry date: "+dateEx;
  document.getElementById("r_card_security_code").innerHTML="Security code: "+accountInfo.csv;
  }
}

async function addNewUser() {
  let firstName=document.getElementById("first_name").value;
  let lastName=document.getElementById("last_name").value;
  let userName=document.getElementById("user_name_id").value;
  let password=document.getElementById("inputPassword").value
  let role=document.getElementById('roleId').value
  // let result=firstName+" "+lastName+" "+userName+" "+password+" "+role
  // alert(result)
  if(!(firstName===""||lastName===""||userName===""||password==="")){
let result=  await (
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName:userName,
        password:password ,
        role:role
      }),
    })
  ).json();
  if(result.exist){
    document.getElementById('user_name_id').style.color="red"
   document.getElementById('user_name_id').value="user must be unique"

  }else{
    loginDisplay()
  }
  }
}

async function getCurrentUser(){
  displayUpdateForm();
  const user = await (
    await fetch("http://localhost:3000/users/"+sessionStorage.getItem('username') ,{
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
  ).json();
  document.getElementById("u_first_name").value=user.firstName;
  document.getElementById("u_last_name").value=user.lastName
  document.getElementById("up_user_name_id").value=user.userName;
  document.getElementById("u_input_password").value=user.password
  document.getElementById('u_role_id').value=user.role;
}

async function updateUserInfo(){
 let firstName=  document.getElementById("u_first_name").value;
 let lastName=  document.getElementById("u_last_name").value;
 let userName=  document.getElementById("up_user_name_id").value;
 let password=  document.getElementById("u_input_password").value;
 let role= document.getElementById('u_role_id').value;
 if(!(firstName===""||lastName===""||userName===""||password==="")){
  await (
    await fetch("http://localhost:3000/users/"+sessionStorage.getItem('username'), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        userName:userName,
        password:password,
        role:role
      }),
    })
  ).json();
  loginDisplay();
 }
}

async function displayCartItem(){
  displayCartForm()
  const item = await (
    await fetch("http://localhost:3000/carts", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
  ).json();
  let filterItem=item.filter(data=>data.userName===sessionStorage.getItem('username'))
  console.log(filterItem)
  let tBody=document.getElementById('table_body_id')
  //$("#tBody").empty();
 //$("#table_of_items tr").remove(); 
  filterItem.forEach(data=>displayAllCart(data,tBody))
}

function displayAllCart(data,tBody){
  let priceValue=document.getElementById('total_price_id');
    tBody=document.getElementById('table_body_id')
  const tr = document.createElement('tr'); 
  const titleTd = document.createElement('td'); 
  titleTd.textContent = data.title;
  tr.appendChild(titleTd); 
  const priceTd = document.createElement('td');
  priceTd.textContent = data.price;
  tr.appendChild(priceTd);
  const deleteButton = document.createElement('button');
  deleteButton.dataset.id = data._id;
  deleteButton.textContent="Remove"
  console.log(deleteButton)
  tr.append(deleteButton)
  tBody.append(tr)
  totalPrice=totalPrice+parseFloat(data.price)
  priceValue.value= totalPrice;
  let p=0;
  deleteButton.addEventListener('click', removeItem )
  function removeItem(){
    fetch("http://localhost:3000/carts/" + data._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token")
      },
    }).then(data =>data.json())
    .then((res)=>{
       tr.remove();
        p=totalPrice-parseFloat(data.price) 
       priceValue.value= p;
    });
  }
}
async function placeOrder(){
 let result=  await (await fetch("http://localhost:3000/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        lastName: document.getElementById("p_last_name").value,
        cardNumber: document.getElementById("p_card_number").value,
        expDate: document.getElementById("p_exp_date").value,
        csv: document.getElementById("p_csv").value,
        price:document.getElementById("total_price_id").value
      }),
    })).json()
    console.log(result.message)
    if(result.message==="ordered"){
      alert('ordered')
 let orderHist= await (await fetch("http://localhost:3000/carts/remove/" + sessionStorage.getItem('username'), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token")
        },
      })).json()
  saveOrderHistory(orderHist.ordered)
    }else{
      alert(result.message)
    }  
}

async function saveOrderHistory(orderedItem){
 let result= await (await fetch("http://localhost:3000/orderHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
         userName:sessionStorage.getItem('username'),
         ordered:orderedItem  
      }),
    })).json()  
}
async  function getOrderHistory(){
  displayCartForm()
  const orderedHist = await (
    await fetch("http://localhost:3000/orderHistory/"+sessionStorage.getItem('username'), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
  ).json();
  // console.log(orderedHist)
  for(let ord of orderedHist){
    ord.ordered.forEach(data=>displayAllCart(data))
  }
  //displayAllCart(data)
}

