function skillsMember() {
    return {
        name: 'Member',
        skills: ['js', 'html', 'css'],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`)
            }, this)
        }
    }
}