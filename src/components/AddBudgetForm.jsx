import { Form } from "react-router-dom";
import { useFetcher } from "react-router-dom";
import { useEffect, useRef } from "react";
// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const myRef = useRef(null);
  const focusRef = useRef(null);

  useEffect(() => {
    if (!isSubmitting) {
      myRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={myRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button disabled={isSubmitting} type="submit" className="btn btn--dark">
          <span>Create budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddBudgetForm;
