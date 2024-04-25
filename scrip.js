function showDetails(member) {
    var allMembers = document.querySelectorAll('.member');
    allMembers.forEach(function(item) {
      item.querySelector('.details').classList.remove('show');
    });
    
    var details = member.querySelector('.details');
    details.classList.toggle('show');
  }
  