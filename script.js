document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
      card.style.boxShadow = 'none';
    });
  });