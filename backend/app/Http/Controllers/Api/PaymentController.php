<?php
namespace App\Http\Controllers\Api;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Payment::with(['student']);
            if ($request->has('student_id')) $query->where('student_id', $request->student_id);
            return $this->sendResponse($query->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['student_id' => 'required|exists:students,id', 'amount' => 'required|numeric', 'status' => 'required|string']);
            return $this->sendResponse(Payment::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = Payment::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update($request->all());
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}