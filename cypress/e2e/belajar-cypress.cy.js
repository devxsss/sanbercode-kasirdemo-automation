const HomePage = require('../support/pages/homePage/home-page');
const LoginPage = require('../support/pages/loginPage/login-page');
const RegisterPage = require('../support/pages/registerPage/register-page');
const kasirdemoPage = require('../support/pages/homePage/kasir-demo-page');
const produkPage = require('../support/pages/Produk/Add-product');
const penjualanPage = require('../support/pages/penjualan/Add-penjualan');

var randomUser = generateRandomUser();
var storeName = generateStoreName();
var product = new newProduct();

function generateRandomUser() {
  const time = 'test' + new Date().getTime();
  return time + '@gmail.com';
}

function generateStoreName() {
  const time = 'toko' + new Date().getTime();
  return time;
}

function newProduct() {
  this.name = 'mie goreng';
  this.deskripsi = 'indomie';
  this.hargabeli = '5.000';
  this.hargajual = '10.000';
  this.stok = '5';
  this.category = 'Umum';
  this.kodeproduct = '';
  this.jumlahbayar = '30.000';
  this.kembalian = '10.000';
}

describe('User should be able to sign up', () => {
  it('with valid data', () => {
    // 1. Visit url
    // 2. Validate sign up pop up is visible
    // 3. Fill username
    // 4. Fill password
    // 5. Click sign up button

    HomePage.goHomepage();
    //SignUp New User
    HomePage.clickSignUpMenu();
    RegisterPage.fillStoreName(storeName);
    RegisterPage.fillEmailLogin(randomUser);
    RegisterPage.fillPasswordLogin();
    HomePage.clickSignUpNewAccount();

    //SignIn New User
    RegisterPage.fillEmailLogin(randomUser);
    RegisterPage.fillPasswordLogin();
    RegisterPage.clickSignUpBtn();
    HomePage.verifyUsernameExist(storeName);

    //Add New Product from Kasir Demo Menu Pages
    kasirdemoPage.clickProdukMenu();
    produkPage.clickAddProductButton();
    produkPage.clickCheckCodeProduct(product);
    produkPage.fillProductName(product);
    produkPage.fillProductDescription(product);
    produkPage.fillProductBuyPrice(product);
    produkPage.fillProducSellPrice(product);
    produkPage.fillProductStock(product);
    produkPage.fillProductCategory(product);
    produkPage.SubmitProductButton();
    produkPage.checkTableProduct(product);

    //add Penjualan from Kasir Demo Menu Pages
    kasirdemoPage.clickPenjualanMenu();
    penjualanPage.clickAddPenjualanButton();
    penjualanPage.clickAddnewPenjualan();
    penjualanPage.clickproductName();
    penjualanPage.addjumlahproduk();
    penjualanPage.jumlahbayar(product);
    penjualanPage.clickBayar();
    penjualanPage.closeModal();
    kasirdemoPage.clickPenjualanMenu();
    penjualanPage.checkTablePenjualan();

    //LogOut from Menu KasirDemo Page
    kasirdemoPage.clickDashboardMenu();
    kasirdemoPage.clickLogoutButton();
  });
});

export { product };
