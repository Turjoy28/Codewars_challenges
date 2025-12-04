class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection=collection;
    this.itemsPerPage=itemsPerPage;
	}
	itemCount() {
	return this.collection.length;
	}
	pageCount() {
	return Math.ceil(this.collection.length/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	  const totalPages=this.pageCount();
    if(pageIndex>=totalPages||pageIndex<0) return -1;
    if(pageIndex===totalPages-1)return this.collection.length%this.itemsPerPage||this.itemsPerPage;
      return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
	  if(itemIndex<0||itemIndex>this.collection.length-1) return -1;
    return Math.floor(itemIndex/this.itemsPerPage);
    
    
	}
}
