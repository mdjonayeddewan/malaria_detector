import 'package:flutter_test/flutter_test.dart';
import 'package:malaria_detector/main.dart';

void main() {
  testWidgets('Malaria Detector app loads correctly', (
    WidgetTester tester,
  ) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that the app title is displayed
    expect(find.text('Malaria Detector'), findsOneWidget);
    expect(find.text('AI-Powered Blood Cell Analysis'), findsOneWidget);

    // Verify that the upload section is displayed
    expect(find.text('No Image Selected'), findsOneWidget);
    expect(find.text('Upload Image'), findsOneWidget);

    // Verify that info cards are displayed
    expect(find.text('How it works'), findsOneWidget);
    expect(find.text('Accuracy'), findsOneWidget);
    expect(find.text('Privacy'), findsOneWidget);
  });
}
