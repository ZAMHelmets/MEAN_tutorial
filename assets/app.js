angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(n,o){t.currentUser=o})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,n){t.login=function(o,e){n.login(o,e).then(function(n){t.$emit("login",n)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,n){t.addPost=function(){t.postBody&&n.create({username:"Add Post Button",body:t.postBody}).success(function(n){t.posts.unshift(n),t.postBody=null})},n.fetch().success(function(n){t.posts=n})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(n){return t.post("/api/posts",n)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var n=this;n.getUser=function(){return t.get("/api/users").then(function(t){return t.data})},n.login=function(o,e){return t.post("/api/sessions",{username:o,password:e}).then(function(o){return n.token=o.data,t.defaults.headers.common["X-Auth"]=o.data,n.getUser()})},n.register=function(o,e){return t.post("/api/users",{username:o,password:e}).then(function(){return n.login(o,e)})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsIlVzZXJTdmMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwiJGVtaXQiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJzdWNjZXNzIiwicG9zdCIsInBvc3RzIiwidW5zaGlmdCIsImZldGNoIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsInJlc3BvbnNlIiwiZGF0YSIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiJBQUdBQSxRQUFRQyxPQUFPLE9BQ1gsWUNBSkQsUUFBUUMsT0FBTyxPQUNkQyxXQUFXLG1CQUFBLFNBQW1CLFNBQVNDLEdBQ2hDQSxFQUFPQyxJQUFJLFFBQVMsU0FBU0MsRUFBR0MsR0FDNUJILEVBQU9JLFlBQWNELE9DRmpDTixRQUFRQyxPQUFPLE9BQ2RDLFdBQVcsYUFBQSxTQUFBLFVBQWEsU0FBVUMsRUFBUUssR0FDbkNMLEVBQU9NLE1BQVEsU0FBVUMsRUFBVUMsR0FDL0JILEVBQVFDLE1BQU1DLEVBQVVDLEdBQ2ZDLEtBQUssU0FBVU4sR0FDaEJILEVBQU9VLE1BQU0sUUFBU1AsU0NKMUNOLFFBQVFDLE9BQU8sT0FDZEMsV0FBVyxhQUFBLFNBQUEsV0FBWSxTQUFVQyxFQUFRVyxHQUN0Q1gsRUFBT1ksUUFBVSxXQUNUWixFQUFPYSxVQUNQRixFQUFTRyxRQUNMUCxTQUFVLGtCQUNWUSxLQUFNZixFQUFPYSxXQUNkRyxRQUFRLFNBQVVDLEdBQ2pCakIsRUFBT2tCLE1BQU1DLFFBQVFGLEdBQ3JCakIsRUFBT2EsU0FBVyxRQUs5QkYsRUFBU1MsUUFDSkosUUFBUSxTQUFVRSxHQUNmbEIsRUFBT2tCLE1BQVFBLE9DdEIzQnJCLFFBQVFDLE9BQU8sT0FDZHVCLFFBQVEsWUFBQSxRQUFZLFNBQVVDLEdBQzNCQyxLQUFLSCxNQUFRLFdBQ1QsTUFBT0UsR0FBTUUsSUFBSSxlQUVyQkQsS0FBS1QsT0FBUyxTQUFVRyxHQUNwQixNQUFPSyxHQUFNTCxLQUFLLGFBQWNBLE9DRHhDcEIsUUFBUUMsT0FBTyxPQUNkMkIsUUFBQSxpQkFBTyxTQUFVQyxHQUNWQSxFQUNLQyxLQUFLLEtBQU01QixXQUFZLFlBQWE2QixZQUFhLGVBQ2pERCxLQUFLLGFBQWM1QixXQUFZLGVBQWdCNkIsWUFBYSxrQkFDNURELEtBQUssVUFBVzVCLFdBQVksWUFBYTZCLFlBQWEsa0JDTm5FL0IsUUFBUUMsT0FBTyxPQUNkdUIsUUFBUSxXQUFBLFFBQVcsU0FBU0MsR0FDckIsR0FBSU8sR0FBTU4sSUFDVk0sR0FBSUMsUUFBVSxXQUNsQixNQUFPUixHQUFNRSxJQUFJLGNBQ2hCZixLQUFLLFNBQVVzQixHQUNkLE1BQU9BLEdBQVNDLFFBR2RILEVBQUl2QixNQUFNLFNBQVNDLEVBQVVDLEdBQ3pCLE1BQU9jLEdBQU1MLEtBQUssaUJBQ2RWLFNBQVVBLEVBQVVDLFNBQVVBLElBQ3ZDQyxLQUFLLFNBQVVzQixHQUdOLE1BRlZGLEdBQUlJLE1BQVFGLEVBQVNDLEtBQ3JCVixFQUFNWSxTQUFTQyxRQUFRQyxPQUFPLFVBQVlMLEVBQVNDLEtBQ2xDSCxFQUFJQyxhQUt6QkQsRUFBSVEsU0FBVyxTQUFVOUIsRUFBVUMsR0FDakMsTUFBT2MsR0FBTUwsS0FBSyxjQUNoQlYsU0FBVUEsRUFBVUMsU0FBVUEsSUFDN0JDLEtBQUssV0FDTixNQUFPb0IsR0FBSXZCLE1BQU1DLEVBQVVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBBdWxlIG9uIDIvNy8xNS5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2FwcCcsW1xuICAgICduZ1JvdXRlJ1xuXSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgQXVsZSBvbiAyLzEyLzE1LlxuICogVXNlZCBmb3IgbG9naW4gcGFnZVxuICovXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbihfLCB1c2VyKSB7XG4gICAgICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICAgIH0pXG4gICAgfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgQXVsZSBvbiAyLzkvMTUuXG4gKiBVc2VkIGZvciBsb2dpbiBwYWdlXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuICAgICAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpe1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBBdWxlIG9uIDIvNi8xNS5cbiAqIGNyZWF0ZSB0aGUgUG9zdHNDdHJsIG1vZHVsZSBhbmQgZGVwZW5kZW5jeSBpbmplY3QgJHNjb3BlLCB0aGUgc2NvcGUgdGllcy9nbHVlcyB0aGUgY29udHJvbGxlciB0byB0aGUgdmlld1xuICogaW50ZWdyYXRlIHRvIHRoZSBSRVNUIEFQSSB0byBwb3N0IGJhY2sgdG8gTW9uZ29EQi4gIE9ubHkgdGhlIHN1Y2Nlc3MgZnVuY3Rpb24gaXMgcG9zdGVkIGFuZCBpdCBudWxscyB0aGUgdmFsdWUgZm9yIHRoZSBuZXh0IHRpbWVcbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKFwiUG9zdHNDdHJsXCIsZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnQWRkIFBvc3QgQnV0dG9uJyxcbiAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0c1N2Yy5mZXRjaCgpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykge1xuICAgICAgICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgICAgICAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KSIsIi8qKlxuICogQ3JlYXRlZCBieSBBdWxlIG9uIDIvOS8xNS5cbiAqIFJvdXRpbmcgZmlsZSB0aGF0IG1hcHMgdGhlIGNvbnRyb2xsZXJzIGFuZCBodG1sIGZpbGVzXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy8nLCB7Y29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsIHRlbXBsYXRlVXJsOiAncG9zdHMuaHRtbCd9KVxuICAgICAgICAgICAgLndoZW4oJy9yZWdpc3RlcicsIHtjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ30pXG4gICAgICAgICAgICAud2hlbignL2xvZ2luJywge2NvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnfSlcbiAgICB9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBBdWxlIG9uIDIvOS8xNS5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24oJGh0dHApe1xuICAgICAgICB2YXIgc3ZjID0gdGhpc1xuICAgICAgICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VycycpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzdmMubG9naW49ZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBzdmMudG9rZW4gPSByZXNwb25zZS5kYXRhXG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ10gPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcbiAgICB9KVxuICB9XG5cbiAvL25vdCBpbiB0aGUgY29kZSBpbiB0aGUgYm9vaywgYnV0IG9mZiBnaXRodWIgd2h5Pz8/ICB3aGF0IGRvZXMgaXQgZG9cbiAgc3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9KSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==