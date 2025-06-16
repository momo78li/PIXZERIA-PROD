// Test script to check navigation
document.addEventListener('DOMContentLoaded', function() {
  console.log('Testing navigation elements...');
  
  const sections = ['leistungen', 'preise', 'beispiele', 'ueber-uns', 'blog', 'website-check'];
  sections.forEach(id => {
    const element = document.getElementById(id);
    console.log(`Section ${id}:`, element ? 'FOUND' : 'NOT FOUND');
    if (element) {
      console.log(`  Position: ${element.offsetTop}px`);
    }
  });
});

function testScroll(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => window.scrollBy(0, -100), 500);
  }
}