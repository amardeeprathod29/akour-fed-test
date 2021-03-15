$(document).ready(function () {

	var url = "https://randomuser.me/api/?results=5";
	var p = "";
	var loadMore;


	fetchInformation(url);


	function fetchInformation(url) {
		fetch(url)
			.then((response) => response.json())
			.then(function (data) {
        data.results.forEach(person => {


					$("div.card-wrapper:nth-of-type(odd)").css("margin-left", "");

					$("div.card-wrapper:nth-of-type(even)").css("margin-left", "50%").css("margin-top", "5%");

           
					p = `<div class="card-wrapper">
        <div class="card">
            <div class="card-front">

                <div class="left">
                	<div class="person right-content">
                       <img src="${person.picture.medium}" class="img-rounded" alt="Cinque Terre">
                         <div>
                            <h4>${person.name.title}  ${person.name.first} ${person.name.last}</h4>
                           
                        </div>
                    </div>
                 </div>
                <div class="right">

                 <div class="cc-rockmenu">
                     
                      <div class="rolling">
                        <figure class="rolling_icon"><i class="fa fa-phone"></i></figure>
                        <span class="phone">${person.phone}</span>
                       
                      </div>
                      <div class="rolling">
                        <figure class="rolling_icon"><i class="fa fa-envelope"></i></figure>
                        <span class="email">${person.email}</span>
                        
                      </div>
                      
                       <div class="rolling">
                        <figure class="rolling_icon"><i class="fa fa-location-arrow"></i></figure>
                        <span>${person.location.street.number}, ${person.location.street.name},</span>
                        <span> ${person.location.city}</span>
                      </div>
                    </div>
            	</div>
             </div>
            </div>
    </div>`;

					$("#results").append(p);

				});

				loadMore = '<button id="loadmore" class="btn btn-primary" style="text-align: center;">Load More</button>';

				$("#results").append(loadMore);

				$('#loadmore').on('click', function () {
					fetchInformation(url);
					$(this).remove();
				});

			});
	}
});