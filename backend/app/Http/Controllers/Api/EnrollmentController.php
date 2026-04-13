<?php
namespace App\Http\Controllers\Api;
use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Enrollment::with(['student', 'course']);
            return $this->sendResponse($query->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['student_id' => 'required|exists:students,id', 'course_id' => 'required|exists:courses,id']);
            return $this->sendResponse(Enrollment::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function destroy($id) {
        try {
            $item = Enrollment::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->delete();
            return $this->sendResponse([], 'Deleted successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}