-- ============================================================================
-- ADD $100,000 TO CHECKING ACCOUNT FOR USER
-- ============================================================================
-- User ID: e988c243-7d5f-4433-88ed-e86a3538793d
-- Amount: $100,000.00
-- ============================================================================

-- Update the checking account balance for the specified user
UPDATE public.accounts
SET 
  balance = balance + 100000.00,
  updated_at = NOW()
WHERE 
  user_id = 'e988c243-7d5f-4433-88ed-e86a3538793d'
  AND account_type_id IN (
    SELECT id FROM public.account_types WHERE name = 'checking'
  );

-- Insert a transaction record for this deposit
INSERT INTO public.transactions (
  from_account_id,
  transaction_type,
  amount,
  description,
  status,
  created_at
)
SELECT 
  id,
  'deposit',
  100000.00,
  'Account funding - $100,000 deposit',
  'completed',
  NOW()
FROM public.accounts
WHERE 
  user_id = 'e988c243-7d5f-4433-88ed-e86a3538793d'
  AND account_type_id IN (
    SELECT id FROM public.account_types WHERE name = 'checking'
  );

-- ============================================================================
-- COMPLETED: Added $100,000 to checking account
-- ============================================================================
