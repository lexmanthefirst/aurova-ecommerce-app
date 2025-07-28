// Dropdown toggle functionality
export function initDropdowns(): void {
  document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
    button.addEventListener("click", (e: Event) => {
      e.stopPropagation();
      const dropdownId = button.getAttribute("data-dropdown-toggle");
      if (!dropdownId) return;

      const dropdown = document.getElementById(dropdownId);
      dropdown?.classList.toggle("hidden");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll('[id$="-dd"]').forEach((dropdown) => {
      dropdown.classList.add("hidden");
    });
  });
}
