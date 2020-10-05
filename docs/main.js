(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Homepage/Services/chef-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Homepage/Services/chef-service.service.ts ***!
  \***********************************************************/
/*! exports provided: ChefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefService", function() { return ChefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



var chefs = {
    "data": [
        {
            "id": "1000",
            "code": "f230fh0g3",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 65,
            "category": "Accessories",
            "quantity": 24,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1001",
            "code": "nvklal433",
            "name": "Black Watch",
            "description": "Product Description",
            "image": "black-watch.jpg",
            "price": 72,
            "category": "Accessories",
            "quantity": 61,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1002",
            "code": "zz21cz3c1",
            "name": "Blue Band",
            "description": "Product Description",
            "image": "blue-band.jpg",
            "price": 79,
            "category": "Fitness",
            "quantity": 2,
            "inventoryStatus": "LOWSTOCK",
            "rating": 3
        },
        {
            "id": "1003",
            "code": "244wgerg2",
            "name": "Blue T-Shirt",
            "description": "Product Description",
            "image": "blue-t-shirt.jpg",
            "price": 29,
            "category": "Clothing",
            "quantity": 25,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1004",
            "code": "h456wer53",
            "name": "Bracelet",
            "description": "Product Description",
            "image": "bracelet.jpg",
            "price": 15,
            "category": "Accessories",
            "quantity": 73,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1005",
            "code": "av2231fwg",
            "name": "Brown Purse",
            "description": "Product Description",
            "image": "brown-purse.jpg",
            "price": 120,
            "category": "Accessories",
            "quantity": 0,
            "inventoryStatus": "OUTOFSTOCK",
            "rating": 4
        },
        {
            "id": "1006",
            "code": "bib36pfvm",
            "name": "Chakra Bracelet",
            "description": "Product Description",
            "image": "chakra-bracelet.jpg",
            "price": 32,
            "category": "Accessories",
            "quantity": 5,
            "inventoryStatus": "LOWSTOCK",
            "rating": 3
        },
        {
            "id": "1007",
            "code": "mbvjkgip5",
            "name": "Galaxy Earrings",
            "description": "Product Description",
            "image": "galaxy-earrings.jpg",
            "price": 34,
            "category": "Accessories",
            "quantity": 23,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1008",
            "code": "vbb124btr",
            "name": "Game Controller",
            "description": "Product Description",
            "image": "game-controller.jpg",
            "price": 99,
            "category": "Electronics",
            "quantity": 2,
            "inventoryStatus": "LOWSTOCK",
            "rating": 4
        },
        {
            "id": "1009",
            "code": "cm230f032",
            "name": "Gaming Set",
            "description": "Product Description",
            "image": "gaming-set.jpg",
            "price": 299,
            "category": "Electronics",
            "quantity": 63,
            "inventoryStatus": "INSTOCK",
            "rating": 3
        },
        {
            "id": "1010",
            "code": "plb34234v",
            "name": "Gold Phone Case",
            "description": "Product Description",
            "image": "gold-phone-case.jpg",
            "price": 24,
            "category": "Accessories",
            "quantity": 0,
            "inventoryStatus": "OUTOFSTOCK",
            "rating": 4
        },
        {
            "id": "1011",
            "code": "4920nnc2d",
            "name": "Green Earbuds",
            "description": "Product Description",
            "image": "green-earbuds.jpg",
            "price": 89,
            "category": "Electronics",
            "quantity": 23,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1012",
            "code": "250vm23cc",
            "name": "Green T-Shirt",
            "description": "Product Description",
            "image": "green-t-shirt.jpg",
            "price": 49,
            "category": "Clothing",
            "quantity": 74,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1013",
            "code": "fldsmn31b",
            "name": "Grey T-Shirt",
            "description": "Product Description",
            "image": "grey-t-shirt.jpg",
            "price": 48,
            "category": "Clothing",
            "quantity": 0,
            "inventoryStatus": "OUTOFSTOCK",
            "rating": 3
        },
        {
            "id": "1014",
            "code": "waas1x2as",
            "name": "Headphones",
            "description": "Product Description",
            "image": "headphones.jpg",
            "price": 175,
            "category": "Electronics",
            "quantity": 8,
            "inventoryStatus": "LOWSTOCK",
            "rating": 5
        },
        {
            "id": "1015",
            "code": "vb34btbg5",
            "name": "Light Green T-Shirt",
            "description": "Product Description",
            "image": "light-green-t-shirt.jpg",
            "price": 49,
            "category": "Clothing",
            "quantity": 34,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1016",
            "code": "k8l6j58jl",
            "name": "Lime Band",
            "description": "Product Description",
            "image": "lime-band.jpg",
            "price": 79,
            "category": "Fitness",
            "quantity": 12,
            "inventoryStatus": "INSTOCK",
            "rating": 3
        },
        {
            "id": "1017",
            "code": "v435nn85n",
            "name": "Mini Speakers",
            "description": "Product Description",
            "image": "mini-speakers.jpg",
            "price": 85,
            "category": "Clothing",
            "quantity": 42,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1018",
            "code": "09zx9c0zc",
            "name": "Painted Phone Case",
            "description": "Product Description",
            "image": "painted-phone-case.jpg",
            "price": 56,
            "category": "Accessories",
            "quantity": 41,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1019",
            "code": "mnb5mb2m5",
            "name": "Pink Band",
            "description": "Product Description",
            "image": "pink-band.jpg",
            "price": 79,
            "category": "Fitness",
            "quantity": 63,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1020",
            "code": "r23fwf2w3",
            "name": "Pink Purse",
            "description": "Product Description",
            "image": "pink-purse.jpg",
            "price": 110,
            "category": "Accessories",
            "quantity": 0,
            "inventoryStatus": "OUTOFSTOCK",
            "rating": 4
        },
        {
            "id": "1021",
            "code": "pxpzczo23",
            "name": "Purple Band",
            "description": "Product Description",
            "image": "purple-band.jpg",
            "price": 79,
            "category": "Fitness",
            "quantity": 6,
            "inventoryStatus": "LOWSTOCK",
            "rating": 3
        },
        {
            "id": "1022",
            "code": "2c42cb5cb",
            "name": "Purple Gemstone Necklace",
            "description": "Product Description",
            "image": "purple-gemstone-necklace.jpg",
            "price": 45,
            "category": "Accessories",
            "quantity": 62,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1023",
            "code": "5k43kkk23",
            "name": "Purple T-Shirt",
            "description": "Product Description",
            "image": "purple-t-shirt.jpg",
            "price": 49,
            "category": "Clothing",
            "quantity": 2,
            "inventoryStatus": "LOWSTOCK",
            "rating": 5
        },
        {
            "id": "1024",
            "code": "lm2tny2k4",
            "name": "Shoes",
            "description": "Product Description",
            "image": "shoes.jpg",
            "price": 64,
            "category": "Clothing",
            "quantity": 0,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1025",
            "code": "nbm5mv45n",
            "name": "Sneakers",
            "description": "Product Description",
            "image": "sneakers.jpg",
            "price": 78,
            "category": "Clothing",
            "quantity": 52,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1026",
            "code": "zx23zc42c",
            "name": "Teal T-Shirt",
            "description": "Product Description",
            "image": "teal-t-shirt.jpg",
            "price": 49,
            "category": "Clothing",
            "quantity": 3,
            "inventoryStatus": "LOWSTOCK",
            "rating": 3
        },
        {
            "id": "1027",
            "code": "acvx872gc",
            "name": "Yellow Earbuds",
            "description": "Product Description",
            "image": "yellow-earbuds.jpg",
            "price": 89,
            "category": "Electronics",
            "quantity": 35,
            "inventoryStatus": "INSTOCK",
            "rating": 3
        },
        {
            "id": "1028",
            "code": "tx125ck42",
            "name": "Yoga Mat",
            "description": "Product Description",
            "image": "yoga-mat.jpg",
            "price": 20,
            "category": "Fitness",
            "quantity": 15,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1029",
            "code": "gwuby345v",
            "name": "Yoga Set",
            "description": "Product Description",
            "image": "yoga-set.jpg",
            "price": 20,
            "category": "Fitness",
            "quantity": 25,
            "inventoryStatus": "INSTOCK",
            "rating": 8
        }
    ]
};
var imgs = {
    "data": [
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria2.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria3.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria3s.jpg",
            "alt": "Description for Image 3",
            "title": "Title 3"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria4.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria4s.jpg",
            "alt": "Description for Image 4",
            "title": "Title 4"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria5.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria5s.jpg",
            "alt": "Description for Image 5",
            "title": "Title 5"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria6.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria6s.jpg",
            "alt": "Description for Image 6",
            "title": "Title 6"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria7.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria7s.jpg",
            "alt": "Description for Image 7",
            "title": "Title 7"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria8.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria8s.jpg",
            "alt": "Description for Image 8",
            "title": "Title 8"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria9.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria9s.jpg",
            "alt": "Description for Image 9",
            "title": "Title 9"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria10.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria10s.jpg",
            "alt": "Description for Image 10",
            "title": "Title 10"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria11.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria11s.jpg",
            "alt": "Description for Image 11",
            "title": "Title 11"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria12.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria12s.jpg",
            "alt": "Description for Image 12",
            "title": "Title 12"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria13.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria13s.jpg",
            "alt": "Description for Image 13",
            "title": "Title 13"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria14.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria14s.jpg",
            "alt": "Description for Image 14",
            "title": "Title 14"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria15.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria15s.jpg",
            "alt": "Description for Image 15",
            "title": "Title 15"
        }
    ]
};
class ChefService {
    constructor(http) {
        this.http = http;
        this.status = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
        this.productNames = [
            "Bamboo Watch",
            "Black Watch",
            "Blue Band",
            "Blue T-Shirt",
            "Bracelet",
            "Brown Purse",
            "Chakra Bracelet",
            "Galaxy Earrings",
            "Game Controller",
            "Gaming Set",
            "Gold Phone Case",
            "Green Earbuds",
            "Green T-Shirt",
            "Grey T-Shirt",
            "Headphones",
            "Light Green T-Shirt",
            "Lime Band",
            "Mini Speakers",
            "Painted Phone Case",
            "Pink Band",
            "Pink Purse",
            "Purple Band",
            "Purple Gemstone Necklace",
            "Purple T-Shirt",
            "Shoes",
            "Sneakers",
            "Teal T-Shirt",
            "Yellow Earbuds",
            "Yoga Mat",
            "Yoga Set",
        ];
    }
    getProductsSmall() {
        return this.http.get('assets/products-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getChefs() {
        return chefs.data;
        // .toPromise()
        // .then(res => <Chef[]>res.data)
        // .then(data => { return data; });
    }
    getChefImages(id) {
        return imgs.data;
    }
    getProductsWithOrdersSmall() {
        return this.http.get('assets/products-orders-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    generatePrduct() {
        const product = {
            id: this.generateId(),
            name: this.generateName(),
            description: "Product Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Product Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };
        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + ".jpg";
        ;
        return product;
    }
    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }
    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }
    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }
    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }
    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}
ChefService.ɵfac = function ChefService_Factory(t) { return new (t || ChefService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChefService, factory: ChefService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/download-app/download-app.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Homepage/download-app/download-app.component.ts ***!
  \*****************************************************************/
/*! exports provided: DownloadAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadAppComponent", function() { return DownloadAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DownloadAppComponent {
    constructor() { }
    ngOnInit() {
    }
}
DownloadAppComponent.ɵfac = function DownloadAppComponent_Factory(t) { return new (t || DownloadAppComponent)(); };
DownloadAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadAppComponent, selectors: [["app-download-app"]], decls: 0, vars: 0, template: function DownloadAppComponent_Template(rf, ctx) { }, styles: ["section[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  \n  overflow: hidden;\n  flex-direction: column;\n}\nsection[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: none;\n}\ndiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2em auto;\n}\n.download[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n  align-self: center;\n  margin: 1em 3em;\n}\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    max-height: 50vh;\n  }\n  section[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    display: flex;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .download[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL2Rvd25sb2FkLWFwcC9kb3dubG9hZC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiIuLi9Ib21lcGFnZS9kb3dubG9hZC1hcHAvZG93bmxvYWQtYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIHBhZGRpbmc6IDJlbSAxNWVtOyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuc2VjdGlvbiA+IGltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYgaW1nIHtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbn1cbi5kb3dubG9hZCB7XG4gIGZsZXgtYmFzaXM6IDI1JTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDFlbSAzZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICB9XG4gIHNlY3Rpb24gPiBpbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5kb3dubG9hZCBoMSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-download-app',
                templateUrl: './download-app.component.html',
                styleUrls: ['./download-app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Homepage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 33, vars: 0, consts: [["role", "banner"], [1, "head-container"], [1, "toolbar"], [1, "flex-row"], ["alt", "Delivery Van Logo", "src", "../../assets/food-van.png"], [2, "align-self", "center"], ["routerLink", "/delivery", "routerLinkActive", "active"], ["routerLink", "/signin", "routerLinkActive", "active"], [1, "last"], ["routerLink", "/becomechef", "routerLinkActive", "active"], [1, "flex-row", "sec-head", 2, "justify-content", "space-between", "z-index", "10000"], [1, "flex-row", "second-header"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/paymentmethods", "routerLinkActive", "active"], ["routerLink", "/myorders", "routerLinkActive", "active"], ["routerLink", "/cart", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order your favourite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Food Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Become a Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Payment Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  color: white;\n  text-decoration: none;\n}\n.sec-head[_ngcontent-%COMP%]{\n  justify-content: space-between;\n  position: relative;\n  top: 32px;\n  width: 100%;\n  bottom: 30px;\n  margin-bottom: 18px;\n\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  color: #ffffffc7;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #2853f2cf;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\nimg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0.5em 0.3em;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n  li[_ngcontent-%COMP%] {\n    padding: 1em 1em;\n  }\n}\n@media screen and (min-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    height: 60px;\n    margin: -8px;\n    font-weight: 600;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 40px;\n    height:40px\n  }\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n  li[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUVBLHVDQUF1QztBQUN2QztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Ii4uL0hvbWVwYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5uYXYgbGk+YXtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2VjLWhlYWR7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbn1cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmZmZmZjNztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg1M2YyY2Y7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNWVtIDAuM2VtO1xufVxuXG4vKiBGb3IgU2NyZWVucyBCaWdnZXIgdGhhbiA3MDAgcGl4ZWxzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gIH1cbiAgbGkge1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLnRvb2xiYXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IC04cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDo0MHB4XG4gIH1cbiAgLnRvb2xiYXIgaW1nIHtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgfVxuICBsaSB7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/home.component.ts":
/*!********************************************!*\
  !*** ./src/app/Homepage/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/Homepage/jumbotron/jumbotron.component.ts");
/* harmony import */ var _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommended/recommended.component */ "./src/app/Homepage/recommended/recommended.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/Homepage/how-it-works/how-it-works.component.ts");
/* harmony import */ var _popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popular-resturants/popular-resturants.component */ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts");
/* harmony import */ var _download_app_download_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-app/download-app.component */ "./src/app/Homepage/download-app/download-app.component.ts");
/* harmony import */ var _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonies/testimonies.component */ "./src/app/Homepage/testimonies/testimonies.component.ts");








class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jumbotron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-how-it-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-popular-resturants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-download-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-testimonies");
    } }, directives: [_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_1__["JumbotronComponent"], _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_2__["RecommendedComponent"], _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__["HowItWorksComponent"], _popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_4__["PopularResturantsComponent"], _download_app_download_app_component__WEBPACK_IMPORTED_MODULE_5__["DownloadAppComponent"], _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_6__["TestimoniesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9Ib21lcGFnZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/how-it-works/how-it-works.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Homepage/how-it-works/how-it-works.component.ts ***!
  \*****************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/how-it-works/card.component */ "./src/app/cards/how-it-works/card.component.ts");




function HowItWorksComponent_app_how_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-how-card", 2);
} if (rf & 2) {
    const guide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("guideDetail", guide_r1);
} }
class HowItWorksComponent {
    constructor() {
        this.guides = [
            {
                title: 'Select Your Desired Chef',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            },
            {
                title: 'Select Your Desired Meal',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            },
            {
                title: 'Get It Delivered Fast',
                content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
            }
        ];
    }
    ngOnInit() { }
}
HowItWorksComponent.ɵfac = function HowItWorksComponent_Factory(t) { return new (t || HowItWorksComponent)(); };
HowItWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowItWorksComponent, selectors: [["app-how-it-works"]], decls: 5, vars: 1, consts: [[1, "flex-row", "card-container"], [3, "guideDetail", 4, "ngFor", "ngForOf"], [3, "guideDetail"]], template: function HowItWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HowItWorksComponent_app_how_card_4_Template, 1, 1, "app-how-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_2__["HowItWorksCardComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background: #630f24;\n  padding: 2em 1em;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\n.card-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 1em auto;\n}\n@media screen and (max-width:768px){\n  .card-container[_ngcontent-%COMP%]{\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoiLi4vSG9tZXBhZ2UvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM2MzBmMjQ7XG4gIHBhZGRpbmc6IDJlbSAxZW07XG59XG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gIC5jYXJkLWNvbnRhaW5lcntcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-how-it-works',
                templateUrl: './how-it-works.component.html',
                styleUrls: ['./how-it-works.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/jumbotron/jumbotron.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Homepage/jumbotron/jumbotron.component.ts ***!
  \***********************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class JumbotronComponent {
    constructor() {
        this.cities = [
            {
                city: 'Lagos',
                area: ['Ikorodu', 'Badagry', 'Lekki', 'Victoria Island', 'Ajah']
            },
            { city: 'Osun', area: ['Aagba', 'Ada', 'Ikirun', 'Ilesa ', 'Ibokun'] },
            {
                city: 'Ekiti',
                area: ['Ado-Ekiti', 'Oye-Ekiti', 'Ido', 'Aramoko ', 'Erio-Ekiti']
            }
        ];
        this.areas = [];
        this.city = '';
        this.area = '';
    }
    search(event) {
        // this.mylookupservice.getResults(event.query).then(data => {
        this.results = this.cities.map(s => s.city);
        //});
    }
    processIt() {
        this.areas = this.cities.find(city => city.city == this.city)
            ? this.cities.find(city => city.city == this.city).area
            : [];
    }
    ngOnInit() { }
}
JumbotronComponent.ɵfac = function JumbotronComponent_Factory(t) { return new (t || JumbotronComponent)(); };
JumbotronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JumbotronComponent, selectors: [["app-jumbotron"]], decls: 9, vars: 0, consts: [[1, "flex-column", "main-center", "cross-center"], [1, "search-container"], ["type", "text", "id", "search-bar", "placeholder", "Find Chefs"], ["href", "#", 1, "search-icon"], [1, "fa", "fa-search"]], template: function JumbotronComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Food Delivery Directly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To Your Door Step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["section[_ngcontent-%COMP%] {\n  background-image: url('Mask Group 4.png');\n  min-height: 50vh;\n  background-size: cover;\n  background-repeat: round;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #420000;\n  font-family: \"Arial\";\n  text-align: center;\n  font-weight: 800;\n  margin: 1em;\n}\n\n\n\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  border-radius: 0px;\n  padding: 1em;\n  background: #fff;\n}\n\n.city[_ngcontent-%COMP%] {\n  border-right: #420000 solid 1px;\n  border-radius: 2.5em 0em 0em 2.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0em 2.5em 2.5em 0em;\n  background: #420000;\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    background-size: contain;\n    background-repeat: round;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n  \n  select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    flex-basis: 33%;\n    font-size: 1.3em;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.search-container[_ngcontent-%COMP%] {\n  width: 490px;\n  display: block;\n  margin: 0 auto;\n}\n\ninput#search-bar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  height: 45px;\n  border-radius: 5px;\n  padding: 0 20px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n}\n\ninput#search-bar[_ngcontent-%COMP%]:focus {\n  border: 1px solid #008ABF;\n  transition: 0.35s ease;\n  color: #008ABF;\n}\n\ninput#search-bar[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  -webkit-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\ninput#search-bar[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  -moz-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\ninput#search-bar[_ngcontent-%COMP%]:focus:-ms-placeholder {\n  -ms-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\n.search-icon[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: 75px !important;\n  top: -39px;\n  right: -38px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQSxpQkFBQTs7QUFDQTs7RUFFRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUFFRjs7QUFBQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esd0JBQUE7RUFHRjs7RUFEQTtJQUNFLGNBQUE7RUFJRjs7RUFEQSxpQkFBQTtFQUNBOztJQUVFLGVBQUE7SUFDQSxnQkFBQTtFQUlGOztFQURBO0lBQ0UsVUFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFHRjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSUo7O0FBSEk7RUFDRSxzQ0FBQTtFQUFBLDhCQUFBO0VBQ0EsVUFBQTtBQUtOOztBQUhJO0VBQ0UsbUNBQUE7RUFBQSw4QkFBQTtFQUNBLFVBQUE7QUFLTjs7QUFISTtFQUNDLGtDQUFBO0VBQUEsOEJBQUE7RUFDQSxVQUFBO0FBS0w7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKIiwiZmlsZSI6Ii4uL0hvbWVwYWdlL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvTWFzayBHcm91cCA0LnBuZycpO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG59XG5oMiB7XG4gIGNvbG9yOiAjNDIwMDAwO1xuICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLyoqRm9ybSBTdHlsaW5nKiovXG5zZWxlY3QsXG5idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2l0eSB7XG4gIGJvcmRlci1yaWdodDogIzQyMDAwMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIuNWVtIDBlbSAwZW0gMi41ZW07XG59XG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwZW0gMi41ZW0gMi41ZW0gMGVtO1xuICBiYWNrZ3JvdW5kOiAjNDIwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgLyoqRm9ybSBTdHlsaW5nKiovXG4gIHNlbGVjdCxcbiAgYnV0dG9uIHtcbiAgICBmbGV4LWJhc2lzOiAzMyU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cblxuLnNlYXJjaC1jb250YWluZXJ7XG4gIHdpZHRoOiA0OTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dCNzZWFyY2gtYmFye1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJjpmb2N1c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4QUJGO1xuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG4gICAgY29sb3I6ICMwMDhBQkY7XG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTsgXG4gICAgICBvcGFjaXR5OiAwO1xuICAgICB9XG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7IFxuICAgICAgb3BhY2l0eTogMDtcbiAgICAgfVxuICAgICY6LW1zLXBsYWNlaG9sZGVyIHtcbiAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjQ1cyBlYXNlOyBcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgfSAgICBcbiAgIH1cbiB9XG5cbi5zZWFyY2gtaWNvbiAuZmEtc2VhcmNoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgICB0b3A6IC0zOXB4O1xuICAgIHJpZ2h0OiAtMzhweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumbotronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jumbotron',
                templateUrl: './jumbotron.component.html',
                styleUrls: ['./jumbotron.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Homepage/popular-resturants/popular-resturants.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PopularResturantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularResturantsComponent", function() { return PopularResturantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PopularResturantsComponent {
    constructor() {
        this.foods = [
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 }
        ];
    }
    ngOnInit() { }
}
PopularResturantsComponent.ɵfac = function PopularResturantsComponent_Factory(t) { return new (t || PopularResturantsComponent)(); };
PopularResturantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularResturantsComponent, selectors: [["app-popular-resturants"]], decls: 0, vars: 0, template: function PopularResturantsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9Ib21lcGFnZS9wb3B1bGFyLXJlc3R1cmFudHMvcG9wdWxhci1yZXN0dXJhbnRzLmNvbXBvbmVudC5jc3MifQ== */", "[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n[_nghost-%COMP%]     .product-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .product-description {\n  margin: 0 0 1rem 0;\n}\n[_nghost-%COMP%]     .product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]     .product-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .product-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n[_nghost-%COMP%]     .product-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-detail {\n  flex: 1 1 0;\n}\n[_nghost-%COMP%]     .product-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n[_nghost-%COMP%]     .product-list-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-action {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .product-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .product-grid-item {\n  margin: 0.5em;\n  border: 1px solid #dee2e6;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-top, [_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .product-grid-item img {\n  width: 75%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     .product-grid-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-price {\n    align-self: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]     .dv-indx {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQU47QUFHRTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUlFO0VBQ0ksa0JBQUE7QUFGTjtBQUtFO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUhOO0FBTUU7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBSk47QUFPRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTE47QUFPTTtFQUNJLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FBTFY7QUFRTTtFQUNJLFdBQUE7QUFOVjtBQVNNO0VBQ0ksb0JBQUE7QUFQVjtBQVVNO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFSVjtBQVdNO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVFY7QUFZTTtFQUNJLHFCQUFBO0FBVlY7QUFjRTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQVpOO0FBY007O0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaVjtBQWVNO0VBQ0ksVUFBQTtFQUNBLHdFQUFBO0VBQ0EsY0FBQTtBQWJWO0FBZ0JNO0VBQ0ksa0JBQUE7QUFkVjtBQWlCTTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFmVjtBQW9CQTtFQUNFLGFBQUE7RUFDQSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUFvQkE7RUFDQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFqQkE7RUFtQkE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQWpCRjtFQW9CQTtJQUNFLGtCQUFBO0VBbEJGO0VBcUJBO0lBQ0Usa0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFwQkY7RUF1QkE7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNJLFVBQUE7QUF0QkoiLCJmaWxlIjoiLi4vSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAucC1kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTRyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeS1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgfVxuICBcbiAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICBcbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQtaXRlbSB7XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBcbiAgICAgIC5wcm9kdWN0LWdyaWQtaXRlbS10b3AsXG4gICAgICAucHJvZHVjdC1ncmlkLWl0ZW0tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtZ3JpZC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuOmhvc3QgOjpuZy1kZWVwIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxufVxuOmhvc3QgOjpuZy1kZWVwIC5kdi1pbmR4e1xuICAgIHotaW5kZXg6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularResturantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popular-resturants',
                templateUrl: './popular-resturants.component.html',
                styleUrls: ['./popular-resturants.component.css', '../recommended/recommended.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/recommended/recommended.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Homepage/recommended/recommended.component.ts ***!
  \***************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/chef-service.service */ "./src/app/Homepage/Services/chef-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");









function RecommendedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-dataViewLayoutOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/chef", a1]; };
function RecommendedComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-rating", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, product_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r4.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r4.inventoryStatus === "OUTOFSTOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("product-badge status-" + product_r4.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.inventoryStatus);
} }
function RecommendedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p-rating", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("product-badge status-" + product_r5.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.inventoryStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, product_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/showcase/images/demo/product/" + product_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r5.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r5.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r5.inventoryStatus === "OUTOFSTOCK");
} }
class RecommendedComponent {
    constructor(chefService, primengConfig) {
        this.chefService = chefService;
        this.primengConfig = primengConfig;
        this.foods = [
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 },
            { name: 'Jollof Rice', rating: 4 }
        ];
    }
    ngOnInit() {
        this.chefs = this.chefService.getChefs();
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' }
        ];
        this.primengConfig.ripple = true;
    }
}
RecommendedComponent.ɵfac = function RecommendedComponent_Factory(t) { return new (t || RecommendedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__["ChefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"])); };
RecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendedComponent, selectors: [["app-recommended"]], decls: 6, vars: 3, consts: [[1, "card"], ["layout", "grid", "styleClass", "dv-indx", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "header"], ["pTemplate", "listItem"], ["pTemplate", "gridItem"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row", "p-jc-md-between"], [1, "p-col-12"], [1, "product-list-item"], [1, "product-list-detail"], [3, "routerLink"], [1, "product-name"], [1, "product-description"], [3, "ngModel", "readonly", "cancel"], [1, "pi", "pi-tag", "product-category-icon"], [1, "product-category"], [1, "product-list-action"], [1, "product-price"], ["icon", "pi pi-shopping-cart", "label", "Add to Cart", 3, "disabled"], [1, "p-col-12", "p-md-4"], [1, "product-grid-item", "card"], [1, "product-grid-item-top"], [1, "product-grid-item-content"], [3, "src", "alt"], [1, "product-grid-item-bottom"], ["icon", "pi pi-shopping-cart", 3, "disabled"]], template: function RecommendedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dataView", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecommendedComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecommendedComponent_ng_template_4_Template, 18, 14, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecommendedComponent_ng_template_5_Template, 21, 16, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.chefs)("paginator", true)("rows", 9);
    } }, directives: [primeng_dataview__WEBPACK_IMPORTED_MODULE_3__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_dataview__WEBPACK_IMPORTED_MODULE_3__["DataViewLayoutOptions"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], primeng_rating__WEBPACK_IMPORTED_MODULE_5__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n[_nghost-%COMP%]     .product-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .product-description {\n  margin: 0 0 1rem 0;\n}\n[_nghost-%COMP%]     .product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]     .product-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .product-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n[_nghost-%COMP%]     .product-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-detail {\n  flex: 1 1 0;\n}\n[_nghost-%COMP%]     .product-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n[_nghost-%COMP%]     .product-list-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n[_nghost-%COMP%]     .product-list-item .product-list-action {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .product-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .product-grid-item {\n  margin: 0.5em;\n  border: 1px solid #dee2e6;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-top, [_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .product-grid-item img {\n  width: 75%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .product-grid-item .product-grid-item-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     .product-grid-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-price {\n    align-self: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]     .dv-indx {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQU47QUFHRTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUlFO0VBQ0ksa0JBQUE7QUFGTjtBQUtFO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUhOO0FBTUU7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBSk47QUFPRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTE47QUFPTTtFQUNJLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FBTFY7QUFRTTtFQUNJLFdBQUE7QUFOVjtBQVNNO0VBQ0ksb0JBQUE7QUFQVjtBQVVNO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFSVjtBQVdNO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVFY7QUFZTTtFQUNJLHFCQUFBO0FBVlY7QUFjRTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQVpOO0FBY007O0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaVjtBQWVNO0VBQ0ksVUFBQTtFQUNBLHdFQUFBO0VBQ0EsY0FBQTtBQWJWO0FBZ0JNO0VBQ0ksa0JBQUE7QUFkVjtBQWlCTTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFmVjtBQW9CQTtFQUNFLGFBQUE7RUFDQSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUFvQkE7RUFDQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFqQkE7RUFtQkE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQWpCRjtFQW9CQTtJQUNFLGtCQUFBO0VBbEJGO0VBcUJBO0lBQ0Usa0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFwQkY7RUF1QkE7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNJLFVBQUE7QUF0QkoiLCJmaWxlIjoiLi4vSG9tZXBhZ2UvcmVjb21tZW5kZWQvcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAucC1kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTRyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeS1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgfVxuICBcbiAgICAgIC5wLXJhdGluZyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICBcbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQtaXRlbSB7XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBcbiAgICAgIC5wcm9kdWN0LWdyaWQtaXRlbS10b3AsXG4gICAgICAucHJvZHVjdC1ncmlkLWl0ZW0tYm90dG9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICB9XG4gIFxuICAgICAgLnByb2R1Y3QtZ3JpZC1pdGVtLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuOmhvc3QgOjpuZy1kZWVwIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAucHJvZHVjdC1saXN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxufVxuOmhvc3QgOjpuZy1kZWVwIC5kdi1pbmR4e1xuICAgIHotaW5kZXg6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommended',
                templateUrl: './recommended.component.html',
                styleUrls: ['./recommended.component.scss']
            }]
    }], function () { return [{ type: _Services_chef_service_service__WEBPACK_IMPORTED_MODULE_1__["ChefService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Homepage/testimonies/testimonies.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Homepage/testimonies/testimonies.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniesComponent", function() { return TestimoniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestimoniesComponent {
    constructor() {
        this.testimonies = [
            {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
                name: 'Customer Name'
            },
            {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
                name: 'Customer Name'
            }
        ];
    }
    ngOnInit() { }
}
TestimoniesComponent.ɵfac = function TestimoniesComponent_Factory(t) { return new (t || TestimoniesComponent)(); };
TestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimoniesComponent, selectors: [["app-testimonies"]], decls: 0, vars: 0, template: function TestimoniesComponent_Template(rf, ctx) { }, styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: #630f24;\n  text-align: center;\n}\n\n@media screen and (max-width: 1023px) {\n  .testimonies[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: justify;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    margin-top: 3em;\n  }\n  .testimonies[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 3em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWVwYWdlL3Rlc3RpbW9uaWVzL3Rlc3RpbW9uaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiLi4vSG9tZXBhZ2UvdGVzdGltb25pZXMvdGVzdGltb25pZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24gaDEge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGNvbG9yOiAjNjMwZjI0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAudGVzdGltb25pZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgfVxuICAudGVzdGltb25pZXMge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimoniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonies',
                templateUrl: './testimonies.component.html',
                styleUrls: ['./testimonies.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chef_chef_chef_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef/chef/chef.component */ "./src/app/chef/chef/chef.component.ts");
/* harmony import */ var _Homepage_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Homepage/home.component */ "./src/app/Homepage/home.component.ts");






const routes = [
    { path: 'home', component: _Homepage_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'chef/:id', component: _chef_chef_chef_component__WEBPACK_IMPORTED_MODULE_2__["ChefComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage/header/header.component */ "./src/app/Homepage/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Get foods at your doorstep';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Homepage/header/header.component */ "./src/app/Homepage/header/header.component.ts");
/* harmony import */ var _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Homepage/jumbotron/jumbotron.component */ "./src/app/Homepage/jumbotron/jumbotron.component.ts");
/* harmony import */ var _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Homepage/recommended/recommended.component */ "./src/app/Homepage/recommended/recommended.component.ts");
/* harmony import */ var _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/resturants/card.component */ "./src/app/cards/resturants/card.component.ts");
/* harmony import */ var _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Homepage/how-it-works/how-it-works.component */ "./src/app/Homepage/how-it-works/how-it-works.component.ts");
/* harmony import */ var _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards/how-it-works/card.component */ "./src/app/cards/how-it-works/card.component.ts");
/* harmony import */ var _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Homepage/popular-resturants/popular-resturants.component */ "./src/app/Homepage/popular-resturants/popular-resturants.component.ts");
/* harmony import */ var _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Homepage/download-app/download-app.component */ "./src/app/Homepage/download-app/download-app.component.ts");
/* harmony import */ var _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Homepage/testimonies/testimonies.component */ "./src/app/Homepage/testimonies/testimonies.component.ts");
/* harmony import */ var _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards/testimonies-card/testimonies-card.component */ "./src/app/cards/testimonies-card/testimonies-card.component.ts");
/* harmony import */ var _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Homepage/home.component */ "./src/app/Homepage/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Homepage/Services/chef-service.service */ "./src/app/Homepage/Services/chef-service.service.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var _chef_chef_chef_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chef/chef/chef.component */ "./src/app/chef/chef/chef.component.ts");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__["ChefService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__["AutoCompleteModule"],
            primeng_galleria__WEBPACK_IMPORTED_MODULE_30__["GalleriaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["JumbotronComponent"],
        _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__["RecommendedComponent"],
        _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__["HowItWorksComponent"],
        _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__["HowItWorksCardComponent"],
        _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__["PopularResturantsComponent"],
        _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__["DownloadAppComponent"],
        _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__["TestimoniesComponent"],
        _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__["TestimoniesCardComponent"],
        _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _chef_chef_chef_component__WEBPACK_IMPORTED_MODULE_29__["ChefComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__["AutoCompleteModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_30__["GalleriaModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Homepage_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _Homepage_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["JumbotronComponent"],
                    _Homepage_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_7__["RecommendedComponent"],
                    _cards_resturants_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _Homepage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_9__["HowItWorksComponent"],
                    _cards_how_it_works_card_component__WEBPACK_IMPORTED_MODULE_10__["HowItWorksCardComponent"],
                    _Homepage_popular_resturants_popular_resturants_component__WEBPACK_IMPORTED_MODULE_11__["PopularResturantsComponent"],
                    _Homepage_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_12__["DownloadAppComponent"],
                    _Homepage_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__["TestimoniesComponent"],
                    _cards_testimonies_card_testimonies_card_component__WEBPACK_IMPORTED_MODULE_14__["TestimoniesCardComponent"],
                    _Homepage_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _chef_chef_chef_component__WEBPACK_IMPORTED_MODULE_29__["ChefComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_20__["PanelModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_25__["RippleModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_28__["AutoCompleteModule"],
                    primeng_galleria__WEBPACK_IMPORTED_MODULE_30__["GalleriaModule"]
                ],
                providers: [_Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_17__["ChefService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cards/how-it-works/card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cards/how-it-works/card.component.ts ***!
  \******************************************************/
/*! exports provided: HowItWorksCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksCardComponent", function() { return HowItWorksCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HowItWorksCardComponent {
    constructor() { }
    ngOnInit() { }
}
HowItWorksCardComponent.ɵfac = function HowItWorksCardComponent_Factory(t) { return new (t || HowItWorksCardComponent)(); };
HowItWorksCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowItWorksCardComponent, selectors: [["app-how-card"]], inputs: { guideDetail: "guideDetail" }, decls: 6, vars: 2, consts: [[1, "container", "flex-column", "cross-center"], [1, "rounded-circle"]], template: function HowItWorksCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.guideDetail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.guideDetail.content);
    } }, styles: [".container[_ngcontent-%COMP%] {\n  flex-basis: 33%;\n  color: #fff;\n  margin: 1em auto;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  height: 7em;\n  width: 7em;\n  background: #fff;\n  border-radius: 100%;\n}\np[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhcmRzL2hvdy1pdC13b3Jrcy9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6Ii4uL2NhcmRzL2hvdy1pdC13b3Jrcy9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzMlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbn1cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxucCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-how-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { guideDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/resturants/card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cards/resturants/card.component.ts ***!
  \****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { food: "food" }, decls: 7, vars: 2, consts: [[1, "card"], ["src", "../../../assets/jollof.png"], [1, "card-detail"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.food.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.food.rating, " Stars");
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width:100%\n}\n.card[_ngcontent-%COMP%]{\n    \n    margin: 1em \n}\n.card-detail[_ngcontent-%COMP%]{\n    padding: 2em;\n    box-shadow: lavender 0.2em 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhcmRzL3Jlc3R1cmFudHMvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoiLi4vY2FyZHMvcmVzdHVyYW50cy9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6MTAwJVxufVxuLmNhcmR7XG4gICAgLyogYm9yZGVyOnNvbGlkIDFweCAjMGVmMzJkOyAqL1xuICAgIG1hcmdpbjogMWVtIFxufVxuLmNhcmQtZGV0YWlse1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3gtc2hhZG93OiBsYXZlbmRlciAwLjJlbSAwLjNlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { food: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/testimonies-card/testimonies-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cards/testimonies-card/testimonies-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestimoniesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniesCardComponent", function() { return TestimoniesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestimoniesCardComponent {
    constructor() { }
    ngOnInit() { }
}
TestimoniesCardComponent.ɵfac = function TestimoniesCardComponent_Factory(t) { return new (t || TestimoniesCardComponent)(); };
TestimoniesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimoniesCardComponent, selectors: [["app-testimonies-card"]], inputs: { testimony: "testimony" }, decls: 8, vars: 2, consts: [[1, "flex-column", "cross-center"], ["src", "../../../assets/customer.png", 1, "rounded-circle"]], template: function TestimoniesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.testimony.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.testimony.name, " ");
    } }, styles: ["div[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nimg[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 1em;\n}\nspan[_ngcontent-%COMP%] {\n  font-size: 5em;\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhcmRzL3Rlc3RpbW9uaWVzLWNhcmQvdGVzdGltb25pZXMtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiLi4vY2FyZHMvdGVzdGltb25pZXMtY2FyZC90ZXN0aW1vbmllcy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBtYXJnaW46IDJlbTtcbn1cbmltZyxcbmgzIHtcbiAgbWFyZ2luOiAxZW07XG59XG5zcGFuIHtcbiAgZm9udC1zaXplOiA1ZW07XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */", ".container[_ngcontent-%COMP%] {\n  flex-basis: 33%;\n  color: #fff;\n  margin: 1em auto;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  height: 7em;\n  width: 7em;\n  background: #fff;\n  border-radius: 100%;\n}\np[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhcmRzL2hvdy1pdC13b3Jrcy9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6Ii4uL2NhcmRzL2hvdy1pdC13b3Jrcy9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzMlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbn1cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxucCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimoniesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonies-card',
                templateUrl: './testimonies-card.component.html',
                styleUrls: [
                    './testimonies-card.component.css',
                    '../how-it-works/card.component.css'
                ]
            }]
    }], function () { return []; }, { testimony: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/chef/chef/chef.component.ts":
/*!*********************************************!*\
  !*** ./src/app/chef/chef/chef.component.ts ***!
  \*********************************************/
/*! exports provided: ChefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefComponent", function() { return ChefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Homepage/Services/chef-service.service */ "./src/app/Homepage/Services/chef-service.service.ts");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");






function ChefComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.previewImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChefComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { "max-width": "640px" }; };
class ChefComponent {
    constructor(route, chefServ) {
        this.route = route;
        this.chefServ = chefServ;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
    ngOnInit() {
        //this.route.params.subscribe(s=>console.dir(s));
        this.route.params.subscribe(params => {
            this.data = this.chefServ.getChefs().find(x => x.id == params['id']);
            this.images = this.chefServ.getChefImages("");
            console.dir(this.images);
        });
    }
}
ChefComponent.ɵfac = function ChefComponent_Factory(t) { return new (t || ChefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_2__["ChefService"])); };
ChefComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChefComponent, selectors: [["app-chef"]], decls: 12, vars: 8, consts: [[1, "chef-view"], [1, "chef-gallery"], [1, "content-section", "implementation"], [1, "card"], [3, "value", "responsiveOptions", "containerStyle", "numVisible", "circular", "showItemNavigators", "valueChange"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [2, "width", "100%", "display", "block", 3, "src"], [1, "p-grid", "p-nogutter", "p-justify-center"], [2, "display", "block", 3, "src"]], template: function ChefComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item Navigators and Thumbnails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-galleria", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ChefComponent_Template_p_galleria_valueChange_7_listener($event) { return ctx.images = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChefComponent_ng_template_8_Template, 1, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChefComponent_ng_template_9_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item Navigators and Thumbnails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi from chef ", ctx.data.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.images)("responsiveOptions", ctx.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("numVisible", 5)("circular", true)("showItemNavigators", true);
    } }, directives: [primeng_galleria__WEBPACK_IMPORTED_MODULE_3__["Galleria"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]], styles: [".content-section.implementation[_ngcontent-%COMP%] {\n  background-color: var(--surface-b);\n  color: var(--text-color);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--surface-e);\n  padding: 2rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWYvY2hlZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7RUFDSSxrQ0FBQTtFQUNBLHdCQUFBO0FBOURKOztBQWdFQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLCtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTdESiIsImZpbGUiOiJjaGVmL2NoZWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1nYWxsZXJpYSB7XHJcbi8vICAgICAmLnAtZ2FsbGVyaWEge1xyXG4vLyAgICAgICAgICYuZnVsbHNjcmVlbiB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4vLyAgICAgICAgICAgICAucC1nYWxsZXJpYS1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAucC1nYWxsZXJpYS1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLnAtZ2FsbGVyaWEtdGh1bWJuYWlsLXdyYXBwZXIge1xyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuLy8gICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAucC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbXMtY29udGFpbmVyIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuY3VzdG9tLWdhbGxlcmlhLWZvb3RlciB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbi8vICAgICAgICAgICAgID4gYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46IC4ycmVtIDA7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgJi5mdWxsc2NyZWVuLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAudGl0bGUtY29udGFpbmVyIHtcclxuLy8gICAgICAgICAgICAgPiBzcGFuIHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC44MjlyZW07XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24uaW1wbGVtZW50YXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1iKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWUpO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChefComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chef',
                templateUrl: './chef.component.html',
                styleUrls: ['./chef.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _Homepage_Services_chef_service_service__WEBPACK_IMPORTED_MODULE_2__["ChefService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 0, consts: [[1, "flex-row", "cross-center", "main-center", "main"], ["src", "../../assets/food-van.png", 1, "van"], [1, "links"], [1, "first"], ["src", "../../assets/google-play-badge-en.png", 1, "google"], [1, "below-footer"], [1, "flex-row", "main-end"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Doorstep Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Be A Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up to Be A Chef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: #121212;\n  color: #fff;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: left;\n  color: rgb(224, 224, 214);\n}\n\n.first[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bolder;\n}\n\n.below-footer[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.links[_ngcontent-%COMP%] {\n  width: 98%;\n  align-self: flex-start;\n  padding: 0.5em 2em;\n  border-top: oldlace 1px solid;\n}\n\n.flex-row[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n\n.main-end[_ngcontent-%COMP%] {\n  margin: 1em 2em;\n}\n\n.van[_ngcontent-%COMP%], .google[_ngcontent-%COMP%] {\n  max-width: 10em;\n  max-height: 10em;\n  padding: 1em 5em;\n}\n\n@media screen and (min-width: 1023px) {\n  .main[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    flex-basis: 15%;\n    padding: 2em 0.5em;\n    border: none;\n  }\n  .van[_ngcontent-%COMP%], .google[_ngcontent-%COMP%] {\n    flex-basis: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBOztJQUVFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiIuLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBjb2xvcjogI2ZmZjtcbn1cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmdiKDIyNCwgMjI0LCAyMTQpO1xufVxuLmZpcnN0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYmVsb3ctZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmxpbmtzIHtcbiAgd2lkdGg6IDk4JTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXItdG9wOiBvbGRsYWNlIDFweCBzb2xpZDtcbn1cbi5mbGV4LXJvdyA+IGxpIHtcbiAgbWFyZ2luOiAyZW07XG59XG4ubWFpbi1lbmQge1xuICBtYXJnaW46IDFlbSAyZW07XG59XG4udmFuLFxuLmdvb2dsZSB7XG4gIG1heC13aWR0aDogMTBlbTtcbiAgbWF4LWhlaWdodDogMTBlbTtcbiAgcGFkZGluZzogMWVtIDVlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAubWFpbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgZmxleC1iYXNpczogMTUlO1xuICAgIHBhZGRpbmc6IDJlbSAwLjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLnZhbixcbiAgLmdvb2dsZSB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\NGDoorstep\DoorstepChef\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map