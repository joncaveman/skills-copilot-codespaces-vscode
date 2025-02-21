function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['html', 'css', 'js'],
    age: 25,
    showSkills: function() {
      this.skills.forEach((skill) => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}
