interface ToolbarProps {
  onAddClick: () => void;
  onBulkDeleteClick: () => void;
  selectedCount: number;
}

const Toolbar = ({
  onAddClick,
  onBulkDeleteClick,
  selectedCount,
}: ToolbarProps) => {
  const hasSelection = selectedCount > 0;

  return (
    <div className="toolbar">
      {hasSelection && (
        <button className="btn-delete" onClick={onBulkDeleteClick}>
          {selectedCount > 1 ? `Bulk Delete (${selectedCount})` : "Delete"}
        </button>
      )}

      <button className="btn-add" onClick={onAddClick}>
        Add Contact
      </button>
    </div>
  );
};

export default Toolbar;
